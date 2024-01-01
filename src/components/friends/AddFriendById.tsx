import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FlexBox } from '@components/layouts/FlexBox'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Text } from '@components/atoms/Text'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { FriendsApi } from '@apis/FriendsApi'
import SearchedFriendList from './SearchedFriendList'
import { authState } from '@libs/store/auth'
import { useRecoilValue } from 'recoil'

const AddFriendById = () => {
  const [searchFriendId, setSearchFriendId] = useState('')

  const { setIsToggle } = useSetFriendRecoilState()
  const auth = useRecoilValue(authState)

  const { data: searchFriendData } = useQuery(
    ['searchFriend', searchFriendId],
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
    if (searchFriendData) {
      return
    } else {
      setIsToggle(false)
    }
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
