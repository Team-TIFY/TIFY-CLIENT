import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'

import { authState } from '@libs/store/auth'
import { friendsQueryKeys } from '@constants/queryKeys/friendsQueryKeys'
import { FriendsApi } from '@apis/FriendsApi'
import { NewFriendsType } from '@models/apis/FriendsType'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { Spacing } from '@components/atoms/Spacing'
import Option from '@components/atoms/Option'
import FriendsListBItem from './FriendsListBItem'

const NewFriends = () => {
  const auth = useRecoilValue(authState)

  const [sortedNewFriendsList, setSortedNewFriendsList] = useState<
    NewFriendsType[]
  >([])

  const { data: newFriendsList = [] } = useQuery(
    [friendsQueryKeys.NEW_FRIENDS_LIST, auth.userProfile.id],
    FriendsApi.GET_NEW_FRIENDS_LIST,
  )

  useEffect(() => {
    const sortedNewFriendsListData = [...newFriendsList].sort((a, b) =>
      a.neighborName.localeCompare(b.neighborName),
    )
    setSortedNewFriendsList(sortedNewFriendsListData)
  }, [newFriendsList])

  return sortedNewFriendsList.length ? (
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
          children={sortedNewFriendsList.length}
          color="gray_400"
          style={{ marginRight: '8px' }}
        />
        <Option variant="new" />
      </FlexBox>
      <FriendsListBItemWrapper>
        <FriendsListBItem
          friendsList={sortedNewFriendsList}
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
