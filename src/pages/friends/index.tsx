import AppBarTemplate from '@components/layouts/AppBarTemplate'
import { Routes, Route } from 'react-router-dom'
import Friends from './Friends'

const FriendsRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppBarTemplate
            label={'프렌즈'}
            variant={'backPushWithMenu'}
            hasNav={true}
          >
            <Friends />
          </AppBarTemplate>
        }
      />
    </Routes>
  )
}

export default FriendsRouter
