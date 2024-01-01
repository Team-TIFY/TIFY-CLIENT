import { useNavigate } from 'react-router-dom'

import { SearchedFriendItemPropsType } from '@models/components/friends/friends'
import FriendsListE from '@components/atoms/FriendsList/FriendsListE'

const SearchedFriendItem = ({ friendData }: SearchedFriendItemPropsType) => {
  const navigate = useNavigate()

  return (
    <FriendsListE
      imageUrl={friendData.imgUrl}
      userId={friendData.userId}
      userName={friendData.userName}
      neighborsNumber={friendData.mutualFriends}
      onClick={() => navigate(`/profile/${friendData.id}/addFriend`)}
    />
  )
}

export default SearchedFriendItem
