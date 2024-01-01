import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'

import { authState } from '@libs/store/auth'
import { friendState } from '@libs/store/friend'
import { friendsQueryKeys } from '@constants/queryKeys/friendsQueryKeys'
import { FriendsApi } from '@apis/FriendsApi'
import { Spacing } from '@components/atoms/Spacing'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import FriendsListDItem from '../FriendsList/FriendsListDItem'

const FriendRequest = () => {
  const auth = useRecoilValue(authState)
  const friendStateData = useRecoilValue(friendState)

  const { data: friendRequestList = [] } = useQuery(
    [friendsQueryKeys.FRIEND_REQUEST_LIST, auth.userProfile.id],
    FriendsApi.GET_FRIEND_REQUEST_LIST,
  )

  const getSpacingHeight = () => {
    return friendStateData.showPartialRequest ? 24 : 64
  }

  return friendRequestList.length ? (
    <FlexBox direction="column">
      <Text
        typo="Caption_12R"
        children="친구 요청"
        color="gray_100"
        style={{ padding: '16px 16px 8px 16px', width: '328px' }}
      />
      <FlexBox direction="column">
        <FriendsListDItem friendsList={friendRequestList} />
      </FlexBox>
      <Spacing height={getSpacingHeight()} />
    </FlexBox>
  ) : null
}

export default FriendRequest
