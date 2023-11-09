import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import FriendsListDItem from './FriendsListDItem'
import { authState } from '@libs/store/auth'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'

const FriendRequest = () => {
  const auth = useRecoilValue(authState)

  const { data: friendRequestList = [] } = useQuery(
    ['friendRequestList', auth.userProfile.id],
    FriendsApi.GET_FRIEND_REQUEST_LIST,
  )

  return (
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
    </FlexBox>
  )
}

export default FriendRequest
