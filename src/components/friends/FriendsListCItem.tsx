import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import FriendsListC from '@components/atoms/FriendsList/FriendsListC'
import { FriendsType } from '@utils/apis/friends/FriendsType'

export type FriendsListCItemProps = {
  friendsList: FriendsType[]
}

const FriendsListCItem = ({ friendsList }: FriendsListCItemProps) => {
  const navigate = useNavigate()

  const handleClickFriendProfile = (friendId: number) => {
    navigate(`/profile/${friendId}`)
  }

  return (
    <FriendsListWrapper>
      {friendsList.map((friend) => (
        <FriendsListC
          key={friend.neighborId}
          userName={friend.neighborName}
          currentState={friend.onBoardingStatus}
          imageUrl={friend.neighborThumbnail}
          onClick={() => handleClickFriendProfile(friend.neighborId)}
        />
      ))}
    </FriendsListWrapper>
  )
}

export default FriendsListCItem

const FriendsListWrapper = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 16px;
`
