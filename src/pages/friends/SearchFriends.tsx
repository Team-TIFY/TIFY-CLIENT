import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import FriendsListBItem from '@components/friends/FriendsListBItem'
import { FlexBox } from '@components/layouts/FlexBox'
import { authState } from '@libs/store/auth'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { ChangeEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'

const SearchFriends = () => {
  const auth = useRecoilValue(authState)

  const { data: friendsList = [] } = useQuery(
    ['friendsList', auth.userProfile.id],
    FriendsApi.GET_FRIENDS_LIST,
  )

  const [newFriendsList, setNewFriendsList] = useState(friendsList)
  const [inputText, setInputText] = useState('')

  const handleSearchFriendName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const searchText = e.target.value.toLowerCase()
    setInputText(searchText)
    setNewFriendsList(() =>
      friendsList.filter((friend) =>
        friend.neighborName.toLowerCase().includes(searchText),
      ),
    )
  }

  const handleRemoveSearchFriendName = () => {
    setInputText('')
    setNewFriendsList([])
  }

  return (
    <>
      <Spacing height={16} />
      <SearchInput
        placeholder="친구 이름 검색"
        onChange={handleSearchFriendName}
        customRemoveHandler={handleRemoveSearchFriendName}
      />
      <Spacing height={32} />
      {inputText.length !== 0 &&
        (newFriendsList.length === 0 ? (
          <FlexBox>
            <Text
              typo="Subhead_14"
              children="사용자를 찾을 수 없어요."
              color="gray_200"
            />
          </FlexBox>
        ) : (
          <FriendsListBItem friendsList={newFriendsList} />
        ))}
    </>
  )
}

export default SearchFriends
