import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

import { FriendsListCItemPropsType } from '@models/components/friends/friends'
import { FlexBox } from '@components/layouts/FlexBox'
import FriendsListC from '@components/atoms/FriendsList/FriendsListC'

const FriendsListCItem = ({
  friendsList,
  alignLeft,
}: FriendsListCItemPropsType) => {
  const navigate = useNavigate()

  const handleClickFriendProfile = (friendId: number) => {
    navigate(`/profile/${friendId}`)
  }

  return (
    <FriendsListWrapper alignLeft={alignLeft}>
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

const FriendsListWrapper = styled(FlexBox)<{ alignLeft: boolean }>`
  flex-wrap: wrap;
  gap: 16px;
  justify-content: ${({ alignLeft }) => (alignLeft ? 'flex-start' : 'center')};
`
