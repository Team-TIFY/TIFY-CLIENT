/* eslint-disable react/jsx-key */
import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import Svg from '@components/atoms/Svg'
import { Navigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import BMLIP from '@pages/searchTaste/BMLIP'
import BMEYE from '@pages/searchTaste/BMEYE'
import FCTOP from '@pages/searchTaste/FCTOP'
import BFPER from '@pages/searchTaste/BFPER'
import BFMOI from '@pages/searchTaste/BFMOI'
import BFPLA from '@pages/searchTaste/BFPLA'
import FEFAS from '@pages/searchTaste/FEFAS'
import FEDIG from '@pages/searchTaste/FEDIG'
import FEBAG from '@pages/searchTaste/FEBAG'
import FAACC from '@pages/searchTaste/FAACC'
import HCDIS from '@pages/searchTaste/HCDIS'
import HCCUP from '@pages/searchTaste/HCCUP'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import Loading from '@components/atoms/Loading'
import { useNavigate } from 'react-router-dom'
import EditProfile from './EditProfile/EditProfile'
import EditOnboardingStatus from './EditProfile/EditOnboardingStatus'
import Profile from './Profile'
import NewTaste from './NewTaste'
import { authState } from '@libs/store/auth'
import MenuIcon from '@assets/icons/MenuIcon'
import { useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import { UserApi } from '@utils/apis/user/UserApi'
import PastToday from './PastToday/PastToday'
import PastTodayDetail from './PastToday/PastTodayDetail'
import FullModal from '@components/atoms/Modal/FullModal'
import BigX from '@assets/icons/BigX'
import ShareProfile from './ShareProfile'
import EditFavorBox from './EditFavorBox/EditFavorBox'

const ProfileRouter = () => {
  const auth = useRecoilValue(authState)
  const navigate = useNavigate()
  const [step, setStepAnswer] = useRecoilState(answerState)
  const location = useLocation()
  const userId = parseInt(location.pathname.slice(9))

  const handleBack = () => {
    if (step.favorAnswerDtos.length > 0) {
      const tempList = [...step.favorAnswerDtos]
      const newFavorAnswerDtos = tempList.slice(0, tempList.length - 1)
      setStepAnswer({
        categoryName: step.categoryName,
        favorAnswerDtos: [...newFavorAnswerDtos],
      })
      navigate(-1)
    } else if (localStorage.getItem('isOnboardingFavor') === 'true') {
      localStorage.removeItem('isOnboardingFavor')
      navigate('/onboarding')
    } else {
      navigate(-1)
    }
  }

  const handleClickIcon = (url: string) => {
    navigate(url)
  }

  const { data: userData } = useQuery(
    ['userProfile', userId],
    () => UserApi.GET_USER_INFO(userId),
    {
      enabled: !isNaN(userId) && userId !== auth.userProfile.id,
    },
  )

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <AppBarTemplate
              variant="title"
              label={'@' + `${auth.userProfile.userId}`}
              hasNav={true}
              rightChildren="actionButton"
              rightChildrenIcon={!isNaN(userId) ? undefined : [<MenuIcon />]}
            >
              <Profile />
            </AppBarTemplate>
          }
        />
        <Route
          path="editFavorBox"
          element={
            <AppBarTemplate
              variant="title"
              label="취향 상자 수정"
              rightChildren="actionButton"
              hasNav={false}
              rightChildrenIcon={[
                <Svg
                  key="searchFriends"
                  children={<BigX />}
                  onClick={() => handleClickIcon('/profile')}
                />,
              ]}
            >
              <EditFavorBox />
            </AppBarTemplate>
          }
        />
        <Route
          path="/:id/*"
          element={
            <AppBarTemplate
              variant="backPushWithTitle"
              label={'@' + userData?.userId}
              hasNav={false}
              rightChildren="none"
            >
              <Profile
                userData={userData}
                userId={userData?.friend ? userId : undefined}
              />
            </AppBarTemplate>
          }
        />
        <Route
          path="/:id/addFriend"
          element={
            <AppBarTemplate
              variant="backPushWithTitle"
              label={'@' + userData?.userId}
              hasNav={false}
              rightChildren="none"
            >
              <Profile
                userData={userData}
                userId={userData?.friend ? userData.id : undefined}
                addFriend={true}
              />
            </AppBarTemplate>
          }
        />
        <Route
          path="/editProfile"
          element={
            <AppBarTemplate
              variant="backPush"
              label="프로필 수정"
              hasNav={false}
              rightChildren="none"
              isLabelAlignCenter={true}
              beforeUrl="/profile"
            >
              <EditProfile />
            </AppBarTemplate>
          }
        />
        <Route
          path="/editProfile/onboardingStatus"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="none"
            >
              <EditOnboardingStatus />
            </AppBarTemplate>
          }
        />
        <Route
          path="/shareProfile"
          element={
            <AppBarTemplate
              label="프로필 공유"
              variant="title"
              hasNav={false}
              rightChildren="actionButton"
              rightChildrenIcon={[
                <Svg
                  onClick={() => navigate('/profile')}
                  children={<BigX />}
                />,
              ]}
            >
              <ShareProfile />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste"
          element={
            <AppBarTemplate
              variant="title"
              label="새로운 취향 답변"
              rightChildren="actionButton"
              hasNav={false}
              rightChildrenIcon={[
                <Svg
                  key="searchFriends"
                  children={<BigX />}
                  onClick={() => handleClickIcon('/profile')}
                />,
              ]}
            >
              <NewTaste />
            </AppBarTemplate>
          }
        />
        <Route path="/newTaste/question-complete" element={<FullModal />} />
        <Route
          path="/newTaste/BMLIP/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <BMLIP />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/BMEYE/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <BMEYE />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/BFPER/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <BFPER />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/BFMOI/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <BFMOI />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/BFPLA/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <BFPLA />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/FCTOP/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <FCTOP />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/FEFAS/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <FEFAS />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/FEDIG/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <FEDIG />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/FEBAG/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <FEBAG />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/FAACC/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <FAACC />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/HCDIS/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <HCDIS />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/HCCUP/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
              customHandler={handleBack}
            >
              <HCCUP />
            </AppBarTemplate>
          }
        />
        <Route
          path="/pastToday/:id"
          element={
            <AppBarTemplate
              variant="backPushWithTitle"
              label="지난 투데이"
              hasNav={false}
              rightChildren="none"
            >
              <PastToday />
            </AppBarTemplate>
          }
        />
        <Route
          path="/pastToday/:id/detail"
          element={
            <AppBarTemplate
              variant="backPushWithTitle"
              label="지난 투데이"
              hasNav={false}
              rightChildren="none"
            >
              <PastTodayDetail />
            </AppBarTemplate>
          }
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  )
}

export default ProfileRouter
