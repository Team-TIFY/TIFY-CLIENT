import FriendsListD from '@components/atoms/FriendsList/FriendsListD'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import useFriendMutate from '@libs/hooks/useFriendMutate'
import { FriendRequestType } from '@utils/apis/friends/FriendsType'

export type FriendsListDItemProps = {
  friendsList: FriendRequestType[]
}

const FriendsListDItem = ({ friendsList }: FriendsListDItemProps) => {
  const { acceptFriendRequestMutate, rejectFriendRequestMutate } =
    useFriendMutate()

  const handleAcceptButtonClick = (acceptRequestId: number) => {
    acceptFriendRequestMutate(acceptRequestId)
  }

  const handleDeleteButtonClick = (deleteRequestId: number) => {
    rejectFriendRequestMutate(deleteRequestId)
  }

  return (
    <FriendsListWrapper>
      {friendsList.map((requestFriend) => (
        <FriendsListD
          key={requestFriend.neighborApplicationId}
          nickName={requestFriend.toUserInfo.userName}
          friendsNumber={6}
          onAcceptButtonClick={() =>
            handleAcceptButtonClick(requestFriend.neighborApplicationId)
          }
          onDeleteButtonClick={() =>
            handleDeleteButtonClick(requestFriend.neighborApplicationId)
          }
        />
      ))}
    </FriendsListWrapper>
  )
}

export default FriendsListDItem

const FriendsListWrapper = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 16px;
`
