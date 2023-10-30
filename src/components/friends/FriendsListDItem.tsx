import Plus from '@assets/icons/Plus'
import FriendsListD from '@components/atoms/FriendsList/FriendsListD'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import useFriendMutate from '@libs/hooks/useFriendMutate'
import { friendState } from '@libs/store/friend'
import { FriendRequestType } from '@utils/apis/friends/FriendsType'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'

export type FriendsListDItemProps = {
  friendsList: FriendRequestType[]
}

const FriendsListDItem = ({ friendsList }: FriendsListDItemProps) => {
  const [friendStateData, setFriendStateData] = useRecoilState(friendState)

  const { acceptFriendRequestMutate, rejectFriendRequestMutate } =
    useFriendMutate()

  const handleClickAcceptButton = (acceptRequestId: number) => {
    acceptFriendRequestMutate(acceptRequestId)
  }

  const handleClickDeleteButton = (deleteRequestId: number) => {
    rejectFriendRequestMutate(deleteRequestId)
  }

  const getFriendsList = (
    friendsList: FriendRequestType[],
    isAllRequest: boolean,
  ) => {
    return isAllRequest ? friendsList : friendsList.slice(0, 4)
  }

  const renderFriendsList = useCallback(() => {
    return getFriendsList(friendsList, friendStateData.isAllRequest).map(
      (requestFriend) => (
        <FriendsListD
          key={requestFriend.neighborApplicationId}
          nickName={requestFriend.toUserInfo.userName}
          friendsNumber={requestFriend.mutualNeighborCounts}
          onAcceptButtonClick={() =>
            handleClickAcceptButton(requestFriend.neighborApplicationId)
          }
          onDeleteButtonClick={() =>
            handleClickDeleteButton(requestFriend.neighborApplicationId)
          }
        />
      ),
    )
  }, [friendsList, friendStateData.isAllRequest])

  useEffect(() => {
    !friendStateData.isAllRequest &&
      friendsList.length > 4 &&
      setFriendStateData((prevState) => ({
        ...prevState,
        showPartialRequest: true,
      }))
  }, [friendStateData.isAllRequest, friendsList])

  return (
    <FriendsListWrapper>
      <FlexBox direction="column" gap={16}>
        {renderFriendsList()}
      </FlexBox>
      {friendStateData.showPartialRequest && (
        <AllRequestWrapper
          onClick={() =>
            setFriendStateData((prevState) => ({
              ...prevState,
              isAllRequest: true,
              showPartialRequest: false,
            }))
          }
        >
          <Text typo="Caption_12R" children="모든 요청 보기" color="gray_400" />
          <Svg
            children={<Plus />}
            style={{ display: 'flex', alignItems: 'center' }}
          />
        </AllRequestWrapper>
      )}
    </FriendsListWrapper>
  )
}

export default FriendsListDItem

const FriendsListWrapper = styled(FlexBox)`
  flex-direction: column;
`

const AllRequestWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px;
  cursor: pointer;
`
