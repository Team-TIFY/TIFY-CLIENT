import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { friendState } from '@libs/store/friend'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import SearchedFriend from './SearchedFriend'

const AddFriendById = () => {
  const setFriendStateData = useSetRecoilState(friendState)

  const [searchFriendId, setSearchFriendId] = useState('')

  const { data: searchFriendData } = useQuery(
    ['searchFriend'],
    () => FriendsApi.SEARCH_FRIEND(searchFriendId),
    {
      enabled: !!searchFriendId,
    },
  )

  useEffect(() => {
    console.log(searchFriendData)
  }, [searchFriendData])

  return (
    <FlexBox direction="column">
      <Text
        typo="Caption_12R"
        children="ID로 추가"
        color="gray_100"
        style={{
          width: '328px',
          padding: '16px 16px 8px 16px',
        }}
      />
      <SearchInput
        placeholder="추가할 친구 TIFY ID 검색"
        onChange={(e) => {
          console.log(e.target.value)
          setSearchFriendId(e.target.value)
        }}
        onClick={() =>
          setFriendStateData((prevState) => ({
            ...prevState,
            isToggle: true,
          }))
        }
      />
      <Spacing height={20} />
      <SearchedFriend />
    </FlexBox>
  )
}

export default AddFriendById
