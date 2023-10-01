import AddUserIcon from '@assets/icons/AddUserIcon'
import SearchIcon from '@assets/icons/FriendSearchIcon'
import Svg from '@components/atoms/Svg'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Friends from './Friends'
import SearchFriends from './SearchFriends'

const FriendsRouter = () => {
  const navigate = useNavigate()

  const handleClickIcon = (url: string) => {
    navigate(url)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppBarTemplate
            label="프렌즈"
            variant="title"
            hasNav={true}
            rightChildren="actionButton"
            rightChildrenIcon={[
              <Svg
                key="searchFriends"
                children={<SearchIcon />}
                onClick={() => handleClickIcon('/friends/searchFriends')}
              />,
              <Svg
                key="addFriends"
                children={<AddUserIcon />}
                onClick={() => handleClickIcon('/friends/addFriend')}
              />,
            ]}
          >
            <Friends />
          </AppBarTemplate>
        }
      />
      <Route
        path="/searchFriends"
        element={
          <AppBarTemplate
            label="친구 검색"
            variant="backPushWithTitle"
            hasNav={false}
            rightChildren="none"
          >
            <SearchFriends />
          </AppBarTemplate>
        }
      />
      <Route
        path="/addFriend"
        element={
          <AppBarTemplate
            label="친구 추가"
            variant="backPushWithTitle"
            hasNav={false}
            rightChildren="none"
          >
            <SearchFriends />
          </AppBarTemplate>
        }
      />
    </Routes>
  )
}

export default FriendsRouter
