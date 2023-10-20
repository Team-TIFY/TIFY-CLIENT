import FriendsListC from '@components/atoms/FriendsList/FriendsListC'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { FriendsType } from '@libs/types/FriendsType'
import { useNavigate } from 'react-router-dom'

export type FriendsListCItemProps = {
  friendsList: FriendsType[]
}

const FriendsListCItem = ({ friendsList }: FriendsListCItemProps) => {
  const navigate = useNavigate()

  const handleClickFriend = (friendId: number) => {
    navigate(`/profile/${friendId}`)
  }

  return (
    <FriendsListWrapper>
      {friendsList.map((friend) => (
        <FriendsListC
          key={friend.neighborId}
          name={friend.neighborName}
          currentState={friend.onBoardingStatus}
          imageUrl={friend.neighborThumbnail}
          onClick={() => handleClickFriend(friend.neighborId)}
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
