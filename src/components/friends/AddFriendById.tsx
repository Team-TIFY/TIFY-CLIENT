import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { friendState } from '@libs/store/friend'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import SearchedFriend from './SearchedFriend'

const AddFriendById = () => {
  const [friendStateData, setFriendStateData] = useRecoilState(friendState)

  const [searchFriendId, setSearchFriendId] = useState('')

  const { data: searchFriendData } = useQuery(
    ['searchFriend', searchFriendId],
    () => FriendsApi.SEARCH_FRIEND(searchFriendId),
    {
      enabled: !!searchFriendId.length,
    },
  )

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
          setSearchFriendId(e.target.value)
        }}
        onClick={() =>
          setFriendStateData((prevState) => ({
            ...prevState,
            isToggle: true,
          }))
        }
      />
      {friendStateData.isToggle &&
        (searchFriendData ? (
          <>
            <Spacing height={20} />
            <SearchedFriend friendData={searchFriendData} />
          </>
        ) : (
          searchFriendId.length && (
            <>
              <Spacing height={32} />
              <Text
                typo="Subhead_14"
                children="사용자를 찾을 수 없어요."
                color="gray_200"
              />
            </>
          )
        ))}
    </FlexBox>
  )
}

export default AddFriendById
