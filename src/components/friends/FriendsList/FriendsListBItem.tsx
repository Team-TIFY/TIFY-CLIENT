import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

import useFriendMutate from '@libs/hooks/mutations/useFriendMutate'
import useGetDate from '@libs/hooks/useGetDate'
import { FriendsType, NewFriendsType } from '@models/apis/FriendsType'
import { FriendsListBItemPropsType } from '@models/components/friends/friends'
import FriendsListB from '@components/atoms/FriendsList/FriendsListB'
import { FlexBox } from '@components/layouts/FlexBox'

export type FriendsListBItemProps = {
  friendsList: FriendsType[] | NewFriendsType[]
  description?: 'birthday'
  isNewFriendsList?: boolean
}

const FriendsListBItem = ({
  friendsList,
  description,
  isNewFriendsList = false,
}: FriendsListBItemPropsType) => {
  const navigate = useNavigate()
  const { getDayStatus, parseDateFromString, parseMonthAndDayFromString } =
    useGetDate()
  const { removeNewFriendMutate } = useFriendMutate()

  const handleClickFriend = (friendId: number) => {
    if (isNewFriendsList) {
      removeNewFriendMutate(friendId)
    } else {
      navigate(`/profile/${friendId}`)
    }
  }

  const getFriendsListDescription = (friend: FriendsType | NewFriendsType) => {
    return new Date(friend.updatedAt).getTime() >
      new Date(friend.viewedAt).getTime()
      ? 'newUpdate'
      : 'none'
  }

  const renderFriend = (friend: FriendsType | NewFriendsType) => {
    const commonProps = {
      key: friend.neighborId,
      userName: friend.neighborName,
      currentState: friend.onBoardingStatus,
      imageUrl: friend.neighborThumbnail,
      onClick: () => handleClickFriend(friend.neighborId),
    }

    if (description === 'birthday') {
      return (
        <FriendsListB
          {...commonProps}
          description="birthday"
          birthdayDescription={getDayStatus(
            parseDateFromString(friend.neighborBirth),
          )}
          birthday={parseMonthAndDayFromString(friend.neighborBirth)}
        />
      )
    } else {
      return (
        <FriendsListB
          {...commonProps}
          description={getFriendsListDescription(friend)}
        />
      )
    }
  }

  return (
    <FriendsListWrapper>
      {friendsList.map((friend) => renderFriend(friend))}
    </FriendsListWrapper>
  )
}

export default FriendsListBItem

const FriendsListWrapper = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 16px;
`
