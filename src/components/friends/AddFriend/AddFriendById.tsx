import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { friendsQueryKeys } from '@constants/queryKeys/friendsQueryKeys'
import { FlexBox } from '@components/layouts/FlexBox'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Text } from '@components/atoms/Text'
import SearchedFriendList from './SearchedFriendList'

const AddFriendById = () => {
  const [searchFriendId, setSearchFriendId] = useState('')

  const { setIsToggle } = useSetFriendRecoilState()

  const { data: searchFriendData } = useQuery(
    [friendsQueryKeys.SEARCH_FRIEND, searchFriendId],
    () => FriendsApi.SEARCH_FRIEND(searchFriendId),
    {
      enabled: !!searchFriendId.length,
    },
  )

  const handleChangeSearchInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setSearchFriendId(e.target.value)
  }

  const handleClickSearchInput = () => setIsToggle(true)

  const handleRemoveSearchInput = () => {
    setSearchFriendId('')
  }

  const handleBlur = () => {
    return !searchFriendData && setIsToggle(false)
  }

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
        onChange={(e) => handleChangeSearchInput(e)}
        onBlur={handleBlur}
        onClick={handleClickSearchInput}
        customRemoveHandler={handleRemoveSearchInput}
        width={328}
      />
      <SearchedFriendList
        searchFriendData={searchFriendData}
        isSearchFriendId={searchFriendId.length !== 0}
      />
    </FlexBox>
  )
}

export default AddFriendById
