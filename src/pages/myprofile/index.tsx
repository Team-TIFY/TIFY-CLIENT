import { Route, Routes } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import MyProfile from './MyProfile'
import NewTaste from './NewTaste'
import BMLIP from '@pages/searchTaste/BMLIP'
import BMEYE from '@pages/searchTaste/BMEYE'
import FCTOP from '@pages/searchTaste/FCTOP'
import { Suspense } from 'react'

const MyProfileRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppBarTemplate
            variant="backPushWithMenu"
            label="@user"
            hasNav={true}
          >
            <MyProfile />
          </AppBarTemplate>
        }
      />
      <Route
        path="/newTaste"
        element={
          <AppBarTemplate
            variant="backPushWithMenu"
            label="새로운 취향 답변"
            hasNav={false}
          >
            <NewTaste />
          </AppBarTemplate>
        }
      />
      <Route
        path="/newTaste/BMLIP/*"
        element={
          <AppBarTemplate variant="backPushWithMenu" hasNav={false}>
            <BMLIP />
          </AppBarTemplate>
        }
      />
      <Route
        path="/newTaste/BMEYE/*"
        element={
          <AppBarTemplate variant="backPushWithMenu" hasNav={false}>
            <BMEYE />
          </AppBarTemplate>
        }
      />
      <Route
        path="/newTaste/FCTOP/*"
        element={
          <AppBarTemplate variant="backPushWithMenu" hasNav={false}>
            <FCTOP />
          </AppBarTemplate>
        }
      />
    </Routes>
  )
}

export default MyProfileRouter
