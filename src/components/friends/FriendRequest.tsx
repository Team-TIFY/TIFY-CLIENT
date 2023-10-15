import FriendsListD from '@components/atoms/FriendsList/FriendsListD'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'

const FriendRequest = () => {
  return (
    <>
      <Text
        typo="Caption_12R"
        children="친구 요청"
        color="gray_100"
        style={{ padding: '16px 16px 8px 16px' }}
      />
      <FlexBox direction="column">
        <FriendsListD nickName="sehee_han990821" friendsNumber={6} />
        <FriendsListD nickName="sdfsdfsa21" friendsNumber={6} />
      </FlexBox>
    </>
  )
}

export default FriendRequest
