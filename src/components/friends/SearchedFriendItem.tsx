import { useNavigate } from 'react-router-dom'
import FriendsListE from '@components/atoms/FriendsList/FriendsListE'
import { SearchedFriendType } from '@models/apis/FriendsType'

type SearchedFriendItemPropsType = {
  friendData: SearchedFriendType
}

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
