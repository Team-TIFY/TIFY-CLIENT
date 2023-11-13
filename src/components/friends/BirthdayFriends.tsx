import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import FriendsListBItem from './FriendsListBItem'
import { authState } from '@libs/store/auth'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'

const BirthdayFriends = () => {
  const auth = useRecoilValue(authState)

  const { data: birthdayFriendsList = [] } = useQuery(
    ['birthdayFriendsList', auth.userProfile.id],
    FriendsApi.GET_BIRTHDAY_FRIENDS_LIST,
  )

  return birthdayFriendsList.length ? (
    <>
      <FlexBox justify="flex-start" style={{ padding: '16px', width: '100%' }}>
        <Text
          typo="Caption_12R"
          children="생일인 친구"
          color="gray_100"
          style={{ margin: '0 4px 0 0' }}
        />
        <Text
          typo="Mont_Caption_12M"
          children={birthdayFriendsList.length}
          color="gray_400"
        />
      </FlexBox>
      <FriendsListBItemWrapper>
        <FriendsListBItem
          friendsList={birthdayFriendsList}
          description="birthday"
        />
      </FriendsListBItemWrapper>
      <Spacing height={16} />
    </>
  ) : null
}

export default BirthdayFriends

const FriendsListBItemWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`
