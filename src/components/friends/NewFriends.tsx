import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import Option from '@components/atoms/Option'
import styled from '@emotion/styled'
import FriendsListBItem from './FriendsListBItem'
import { Spacing } from '@components/atoms/Spacing'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useEffect } from 'react'

const NewFriends = () => {
  const auth = useRecoilValue(authState)

  const { data: newFriendsList = [] } = useQuery(
    ['newFriendsList', auth.userProfile.id],
    FriendsApi.GET_NEW_FRIENDS_LIST,
  )

  useEffect(() => {
    newFriendsList.sort((a, b) => a.neighborName.localeCompare(b.neighborName))
  }, [newFriendsList])

  return newFriendsList.length ? (
    <>
      <FlexBox justify="flex-start" style={{ width: '100%', padding: '16px' }}>
        <Text
          typo="Caption_12R"
          children="새로운 친구"
          color="gray_100"
          style={{
            margin: '0 4px 0 0',
          }}
        />
        <Text
          typo="Mont_Caption_12M"
          children={newFriendsList.length}
          color="gray_400"
          style={{ marginRight: '8px' }}
        />
        <Option variant="new" />
      </FlexBox>
      <FriendsListBItemWrapper>
        <FriendsListBItem
          friendsList={newFriendsList}
          isNewFriendsList={true}
        />
      </FriendsListBItemWrapper>
      <Spacing height={16} />
    </>
  ) : null
}

export default NewFriends

const FriendsListBItemWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`
