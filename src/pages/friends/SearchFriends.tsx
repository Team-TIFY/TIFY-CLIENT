import { ChangeEvent, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Spacing } from '@components/atoms/Spacing'
import FriendsListBItem from '@components/friends/FriendsListBItem'
import FriendNotFound from '@components/friends/FriendNotFound'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { FriendsType } from '@utils/apis/friends/FriendsType'

const SearchFriends = () => {
  const auth = useRecoilValue(authState)

  const { data: friendsList = [] } = useQuery(
    ['friendsList', auth.userProfile.id],
    FriendsApi.GET_FRIENDS_LIST,
  )

  const [searchedFriendsList, setSearchedFriendsList] = useState(friendsList)
  const [inputText, setInputText] = useState('')

  const handleSetSearchFriendName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const searchText = e.target.value.toLowerCase()

    setInputTextAndSearchedFriendsList(
      searchText,
      friendsList.filter((friend) =>
        friend.neighborName.toLowerCase().includes(searchText),
      ),
    )
  }

  const handleRemoveSearchFriendName = () => {
    setInputTextAndSearchedFriendsList('', [])
  }

  const setInputTextAndSearchedFriendsList = (
    inputText: string,
    newFriendsList: FriendsType[],
  ) => {
    setInputText(inputText)
    setSearchedFriendsList(newFriendsList)
  }

  const renderSearchedFriendsList = () => {
    if (inputText.length === 0) return

    return searchedFriendsList.length === 0 ? (
      <FriendNotFound />
    ) : (
      <FriendsListBItem friendsList={searchedFriendsList} />
    )
  }

  return (
    <>
      <Spacing height={16} />
      <SearchInput
        placeholder="친구 이름 검색"
        onChange={handleSetSearchFriendName}
        customRemoveHandler={handleRemoveSearchFriendName}
      />
      <Spacing height={32} />
      {renderSearchedFriendsList()}
    </>
  )
}

export default SearchFriends
