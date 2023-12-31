import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import FriendsListC from '@components/atoms/FriendsList/FriendsListC'
import { FriendsType } from '@models/apis/FriendsType'

export type FriendsListCItemProps = {
  friendsList: FriendsType[]
  alignLeft: boolean
}

const FriendsListCItem = ({
  friendsList,
  alignLeft,
}: FriendsListCItemProps) => {
  const navigate = useNavigate()

  const handleClickFriendProfile = (friendId: number) => {
    navigate(`/profile/${friendId}`)
  }

  return (
    <FriendsListWrapper left={alignLeft ? 1 : 0}>
      {friendsList.map((friend) => (
        <FriendsListC
          key={friend.neighborId}
          userName={friend.neighborName}
          currentState={friend.onBoardingStatus}
          imageUrl={friend.neighborThumbnail}
          onClick={() => handleClickFriendProfile(friend.neighborId)}
          favorList={friend.userFavorList}
        />
      ))}
    </FriendsListWrapper>
  )
}

export default FriendsListCItem

const FriendsListWrapper = styled(FlexBox)<{ left: number }>`
  flex-wrap: wrap;
  gap: 16px;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'center')};
`
