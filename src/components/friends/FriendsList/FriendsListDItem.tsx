import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from '@emotion/styled'

import useFriendMutate from '@libs/hooks/useFriendMutate'
import { friendState } from '@libs/store/friend'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { FriendRequestType } from '@models/apis/friends/FriendsType'
import { FriendsListDItemPropsType } from '@models/components/friends/friends'
import Plus from '@assets/icons/Plus'
import { FlexBox } from '@components/layouts/FlexBox'
import FriendsListD from '@components/atoms/FriendsList/FriendsListD'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'

const FriendsListDItem = ({ friendsList }: FriendsListDItemPropsType) => {
  const friendStateData = useRecoilValue(friendState)

  const { acceptFriendRequestMutate, rejectFriendRequestMutate } =
    useFriendMutate()
  const { setShowPartialRequest, setIsAllRequest } = useSetFriendRecoilState()
  const navigate = useNavigate()

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

  const handleClickFriendsList = (friendId: number) => {
    navigate(`/profile/${friendId}`)
  }

  const renderFriendsList = useCallback(() => {
    return getFriendsList(friendsList, friendStateData.isAllRequest).map(
      (requestFriend) => (
        <FriendsListD
          key={requestFriend.neighborApplicationId}
          userId={requestFriend.toUserInfo.userId}
          friendsNumber={requestFriend.mutualNeighborCounts}
          isAccepted={requestFriend.neighborApplicationStatus === 'ACCEPT'}
          onClick={() => handleClickFriendsList(requestFriend.toUserInfo.id)}
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

  const handleClickAllRequest = () => {
    setIsAllRequest(true)
    setShowPartialRequest(false)
  }

  useEffect(() => {
    if (!friendStateData.isAllRequest && friendsList.length > 4)
      setShowPartialRequest(true)
  }, [friendStateData.isAllRequest, friendsList])

  const renderAllRequests = () => {
    return (
      friendStateData.showPartialRequest && (
        <AllRequestWrapper onClick={handleClickAllRequest}>
          <Text typo="Caption_12R" children="모든 요청 보기" color="gray_400" />
          <Svg
            children={<Plus />}
            style={{ display: 'flex', alignItems: 'center' }}
          />
        </AllRequestWrapper>
      )
    )
  }

  return (
    <FriendsListWrapper>
      <FlexBox direction="column" gap={16}>
        {renderFriendsList()}
      </FlexBox>
      {renderAllRequests()}
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
