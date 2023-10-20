import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import { authState } from '@libs/store/auth'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useRecoilValue } from 'recoil'
import FriendsListBItem from './FriendsListBItem'

const BirthdayFriends = () => {
  const auth = useRecoilValue(authState)

  const { data: birthdayFriendsList = [] } = useQuery(
    ['birthdayFriendsList', auth.userProfile.userId],
    FriendsApi.GET_BIRTHDAY_FRIENDS_LIST,
  )

  return (
    <>
      <FlexBox justify="flex-start" style={{ padding: '16px' }}>
        <Text
          typo="Caption_12R"
          children="생일인 친구"
          color="gray_100"
          style={{ margin: '0 4px 0 0' }}
        />
        <Text typo="Mont_Caption_12M" children={2} color="gray_400" />
      </FlexBox>
      <Padding size={[0, 16]}>
        <FriendsListBItem
          friendsList={birthdayFriendsList}
          description="birthday"
        />
      </Padding>
      <Spacing height={16} />
    </>
  )
}

export default BirthdayFriends
