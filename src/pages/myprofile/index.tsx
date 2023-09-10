import { Route, Routes } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import MyProfile from './MyProfile'
import NewTaste from './NewTaste'
import SearchTaste from '@pages/searchTaste/[tasteType]'

const MyProfileRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppBarTemplate variant="backPushWithMenu" label="@user" hasNav={true}>
            <MyProfile />
          </AppBarTemplate>
        }
      />
      <Route
        path="/newTaste"
        element={
          <AppBarTemplate variant="backPushWithMenu" label="새로운 취향 답변" hasNav={false}>
            <NewTaste />
          </AppBarTemplate>
        }
      />
      <Route
        path="/newTaste/:tasteType/*"
        element={
          <AppBarTemplate variant="backPushWithMenu" label="새로운 취향 답변" hasNav={false}>
            <SearchTaste />
          </AppBarTemplate>
        }
      />
    </Routes>
  )
}

export default MyProfileRouter
