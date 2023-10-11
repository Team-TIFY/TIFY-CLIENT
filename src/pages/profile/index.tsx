/* eslint-disable react/jsx-key */
import { Route, Routes, useLocation } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import Profile from './Profile'
import NewTaste from './NewTaste'
import BMLIP from '@pages/searchTaste/BMLIP'
import BMEYE from '@pages/searchTaste/BMEYE'
import FCTOP from '@pages/searchTaste/FCTOP'
import { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import MenuIcon from '@assets/icons/MenuIcon'
import { UserApi } from '@utils/apis/user/UserApi'
import { useQuery } from '@tanstack/react-query'
import BFPER from '@pages/searchTaste/BFPER'
import BFMOI from '@pages/searchTaste/BFMOI'
import BFPLA from '@pages/searchTaste/BFPLA'
import FEFAS from '@pages/searchTaste/FEFAS'
import FEDIG from '@pages/searchTaste/FEDIG'
import FEBAG from '@pages/searchTaste/FEBAG'
import FAACC from '@pages/searchTaste/FAACC'
import HCDIS from '@pages/searchTaste/HCDIS'
import HCCUP from '@pages/searchTaste/HCCUP'

const ProfileRouter = () => {
  const auth = useRecoilValue(authState)

  const location = useLocation()
  const friendId = parseInt(location.pathname.slice(9))

  const { data: friendData } = useQuery(
    ['friendProfile', friendId],
    () => UserApi.GET_USER_INFO(friendId),
    {
      enabled: !isNaN(friendId) && auth.userId !== friendId,
    },
  )

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <AppBarTemplate
              variant="title"
              label={'@' + '변경'}
              hasNav={true}
              rightChildren="actionButton"
              rightChildrenIcon={[<MenuIcon />]}
            >
              <Profile />
            </AppBarTemplate>
          }
        />
        <Route
          path="/:id/*"
          element={
            <AppBarTemplate
              variant="backPushWithTitle"
              label={'@' + friendData?.email}
              hasNav={false}
              rightChildren="none"
            >
              <Profile friendData={friendData} friendId={friendId} />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste"
          element={
            <AppBarTemplate
              variant="title"
              label="새로운 취향 답변"
              rightChildren="dots"
              hasNav={false}
            >
              <NewTaste />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/BMLIP/*"
          element={
            <AppBarTemplate
              variant="backPush"
              hasNav={false}
              rightChildren="stepNum"
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
            >
              <HCCUP />
            </AppBarTemplate>
          }
        />
      </Routes>
    </Suspense>
  )
}

export default ProfileRouter
