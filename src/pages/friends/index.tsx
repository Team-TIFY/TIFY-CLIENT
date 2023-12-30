import { Routes, Route, useNavigate } from 'react-router-dom'
import Svg from '@components/atoms/Svg'
import PresentRecommend from '@components/friends/PresentRecommend/PresentRecommend'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import AddFriend from './AddFriend'
import Friends from './Friends'
import SearchFriends from './SearchFriends'
import AddUserIcon from '@assets/icons/AddUserIcon'
import SearchIcon from '@assets/icons/FriendSearchIcon'
import { Navigate } from 'react-router-dom'

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
            <AddFriend />
          </AppBarTemplate>
        }
      />
      <Route
        path="/presentRecommend"
        element={
          <AppBarTemplate
            label="선물하기"
            variant="backPushWithTitle"
            hasNav={false}
            rightChildren="none"
          >
            <PresentRecommend />
          </AppBarTemplate>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default FriendsRouter
