import FriendsListE from '@components/atoms/FriendsList/FriendsListE'
import { SearchedFriendType } from '@utils/apis/friends/FriendsType'
import { useNavigate } from 'react-router-dom'

type SearchedFriendPropsType = {
  friendData: SearchedFriendType
}

const SearchedFriend = ({ friendData }: SearchedFriendPropsType) => {
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

export default SearchedFriend
