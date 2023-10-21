import Plus from '@assets/icons/Plus'
import FriendsListD from '@components/atoms/FriendsList/FriendsListD'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
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
      {friendsList.length > 4 ? (
        <>
          {friendsList.slice(0, 4).map((requestFriend) => (
            <FriendsListD
              key={requestFriend.neighborApplicationId}
              nickName={requestFriend.toUserInfo.userName}
              friendsNumber={requestFriend.mutualNeighborCounts}
              onAcceptButtonClick={() =>
                handleAcceptButtonClick(requestFriend.neighborApplicationId)
              }
              onDeleteButtonClick={() =>
                handleDeleteButtonClick(requestFriend.neighborApplicationId)
              }
            />
          ))}
          <FlexBox
            gap={4}
            style={{
              padding: '16px',
              cursor: 'pointer',
            }}
          >
            <Text
              typo="Caption_12R"
              children="모든 요청 보기"
              color="gray_400"
            />
            <Svg children={<Plus />} />
          </FlexBox>
        </>
      ) : (
        friendsList.map((requestFriend) => (
          <FriendsListD
            key={requestFriend.neighborApplicationId}
            nickName={requestFriend.toUserInfo.userName}
            friendsNumber={requestFriend.mutualNeighborCounts}
            onAcceptButtonClick={() =>
              handleAcceptButtonClick(requestFriend.neighborApplicationId)
            }
            onDeleteButtonClick={() =>
              handleDeleteButtonClick(requestFriend.neighborApplicationId)
            }
          />
        ))
      )}
    </FriendsListWrapper>
  )
}

export default FriendsListDItem

const FriendsListWrapper = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 16px;
`
