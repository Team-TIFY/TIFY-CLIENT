import FriendsListB from '@components/atoms/FriendsList/FriendsListB'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import useGetDate from '@libs/hooks/useGetDate'
import { FriendsType } from '@libs/types/FriendsType'
import { useNavigate } from 'react-router-dom'

export type FriendsListBItemProps = {
  friendsList: FriendsType[]
  description?: 'birthday'
}

const FriendsListBItem = ({
  friendsList,
  description,
}: FriendsListBItemProps) => {
  const navigate = useNavigate()
  const { getDayStatus, parseDateFromString, parseMonthAndDayFromString } =
    useGetDate()

  const handleClickFriend = (friendId: number) => {
    navigate(`/profile/${friendId}`)
  }

  const renderFriend = (friend: FriendsType) => {
    const commonProps = {
      key: friend.neighborId,
      name: friend.neighborName,
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
          description={
            new Date(friend.updatedAt).getTime() >
            new Date(friend.viewedAt).getTime()
              ? 'newUpdate'
              : 'none'
          }
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
