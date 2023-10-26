import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { authState } from '@libs/store/auth'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useRecoilValue } from 'recoil'
import FriendsListDItem from './FriendsListDItem'

const FriendRequest = () => {
  const auth = useRecoilValue(authState)

  const { data: friendRequestList = [] } = useQuery(
    ['friendRequestList', auth.userProfile.id],
    FriendsApi.GET_FRIEND_REQUEST_LIST,
  )

  return (
    <>
      <Text
        typo="Caption_12R"
        children="친구 요청"
        color="gray_100"
        style={{ padding: '16px 16px 8px 16px' }}
      />
      <FlexBox direction="column">
        <FriendsListDItem friendsList={friendRequestList} />
      </FlexBox>
    </>
  )
}

export default FriendRequest
