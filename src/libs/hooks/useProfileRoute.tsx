import { Navigate, useNavigate } from 'react-router-dom'

import BigX from '@assets/icons/BigX'
import MenuIcon from '@assets/icons/MenuIcon'
import { AuthStateType } from '@libs/store/auth'
import { UserInfoType } from '@models/apis/UserType'
import { ProfileRoutesType } from '@models/components/Profile/profile'
import EditFavorBox from '@pages/profile/EditFavorBox/EditFavorBox'
import EditOnboardingStatus from '@pages/profile/EditProfile/EditOnboardingStatus'
import EditProfile from '@pages/profile/EditProfile/EditProfile'
import NewTaste from '@pages/profile/NewTaste'
import PastToday from '@pages/profile/PastToday/PastToday'
import PastTodayDetail from '@pages/profile/PastToday/PastTodayDetail'
import ShareProfile from '@pages/profile/ShareProfile'
import BFMOI from '@pages/searchTaste/BFMOI'
import BFPER from '@pages/searchTaste/BFPER'
import BFPLA from '@pages/searchTaste/BFPLA'
import BMEYE from '@pages/searchTaste/BMEYE'
import BMLIP from '@pages/searchTaste/BMLIP'
import FAACC from '@pages/searchTaste/FAACC'
import FCTOP from '@pages/searchTaste/FCTOP'
import FEBAG from '@pages/searchTaste/FEBAG'
import FEDIG from '@pages/searchTaste/FEDIG'
import FEFAS from '@pages/searchTaste/FEFAS'
import HCCUP from '@pages/searchTaste/HCCUP'
import HCDIS from '@pages/searchTaste/HCDIS'
import Profile from '@pages/profile/Profile'
import FullModal from '@components/atoms/Modal/FullModal'
import Svg from '@components/atoms/Svg'

export const useProfileRoute = (
  auth: AuthStateType,
  userId: number,
  userData: UserInfoType,
  handleBack: () => void,
) => {
  const navigate = useNavigate()

  const profileRoutes: ProfileRoutesType = [
    {
      path: '/',
      variant: 'title',
      label: `@${auth.userProfile.userId}`,
      hasNav: true,
      rightChildren: 'actionButton',
      rightChildrenIcon: [!isNaN(userId) ? undefined : <MenuIcon />],
      element: <Profile />,
    },
    {
      path: 'editFavorBox',
      variant: 'title',
      label: `취향 상자 수정`,
      hasNav: false,
      rightChildren: 'actionButton',
      rightChildrenIcon: [
        <Svg
          key="editFavorBox"
          children={<BigX />}
          onClick={() => navigate('/profile')}
        />,
      ],
      element: <EditFavorBox />,
    },
    {
      path: '/:id/*',
      variant: 'backPushWithTitle',
      label: `@${userData?.userId}`,
      hasNav: false,
      rightChildren: 'none',
      element: (
        <Profile
          userData={userData}
          userId={userData?.friend ? userId : undefined}
        />
      ),
    },
    {
      path: '/:id/addFriend',
      variant: 'backPushWithTitle',
      label: `@${userData?.userId}`,
      hasNav: false,
      rightChildren: 'none',
      element: (
        <Profile
          userData={userData}
          userId={userData?.friend ? userData.id : undefined}
          addFriend={true}
        />
      ),
    },
    {
      path: '/editProfile',
      variant: 'backPush',
      label: '프로필 수정',
      hasNav: false,
      rightChildren: 'none',
      isLabelAlignCenter: true,
      beforeUrl: '/profile',
      element: <EditProfile />,
    },
    {
      path: '/editProfile/onboardingStatus',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'none',
      element: <EditOnboardingStatus />,
    },
    {
      path: '/shareProfile',
      variant: 'title',
      label: '프로필 공유',
      hasNav: false,
      rightChildren: 'actionButton',
      rightChildrenIcon: [
        <Svg
          key="shareProfile"
          onClick={() => navigate('/profile')}
          children={<BigX />}
        />,
      ],
      element: <ShareProfile />,
    },
    {
      path: '/newTaste',
      variant: 'title',
      label: '새로운 취향 답변',
      hasNav: false,
      rightChildren: 'actionButton',
      rightChildrenIcon: [
        <Svg
          key="searchFriends"
          children={<BigX />}
          onClick={() => navigate('/profile')}
        />,
      ],
      element: <NewTaste />,
    },
    {
      path: '/newTaste/question-complete',
      element: <FullModal />,
    },
    {
      path: '/newTaste/BMLIP/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <BMLIP />,
    },
    {
      path: '/newTaste/BMEYE/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <BMEYE />,
    },
    {
      path: '/newTaste/BFPER/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <BFPER />,
    },
    {
      path: '/newTaste/BFMOI/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <BFMOI />,
    },
    {
      path: '/newTaste/BFPLA/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <BFPLA />,
    },
    {
      path: '/newTaste/FCTOP/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <FCTOP />,
    },
    {
      path: '/newTaste/FEFAS/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <FEFAS />,
    },
    {
      path: '/newTaste/FEDIG/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <FEDIG />,
    },
    {
      path: '/newTaste/FEBAG/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <FEBAG />,
    },
    {
      path: '/newTaste/FAACC/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <FAACC />,
    },
    {
      path: '/newTaste/HCDIS/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <HCDIS />,
    },
    {
      path: '/newTaste/HCCUP/*',
      variant: 'backPush',
      hasNav: false,
      rightChildren: 'stepNum',
      customHandler: handleBack,
      element: <HCCUP />,
    },
    {
      path: '/pastToday/:id',
      variant: 'backPushWithTitle',
      label: '지난 투데이',
      hasNav: false,
      rightChildren: 'none',
      element: <PastToday />,
    },
    {
      path: '/pastToday/:id/detail',
      variant: 'backPushWithTitle',
      label: '지난 투데이',
      hasNav: false,
      rightChildren: 'none',
      element: <PastTodayDetail />,
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ]

  return profileRoutes
}
