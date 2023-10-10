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
              rightChildren="none"
            >
              <BMLIP />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/BMEYE/*"
          element={
            <AppBarTemplate variant="title" hasNav={false} rightChildren="none">
              <BMEYE />
            </AppBarTemplate>
          }
        />
        <Route
          path="/newTaste/FCTOP/*"
          element={
            <AppBarTemplate variant="title" hasNav={false} rightChildren="none">
              <FCTOP />
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
      </Routes>
    </Suspense>
  )
}

export default ProfileRouter
