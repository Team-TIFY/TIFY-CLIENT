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
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <AppBarTemplate
              variant="title"
              label="@user"
              hasNav={true}
              rightChildren="dots"
            >
              <MyProfile />
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
            <AppBarTemplate variant="title" hasNav={false} rightChildren="none">
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
      </Routes>
    </Suspense>
  )
}

export default MyProfileRouter
