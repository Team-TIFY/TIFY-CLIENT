import FriendsListB from '@components/atoms/FriendsList/FriendsListB'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { authState } from '@libs/store/auth'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const SearchFriends = () => {
  const auth = useRecoilValue(authState)

  const navigate = useNavigate()

  const { data: friendsList = [] } = useQuery(
    ['friendsList', auth.userProfile.userId],
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

  const handleClickFriend = (friendId: number) => {
    navigate(`/profile/${friendId}`)
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
      <FriendsListWrapper>
        {newFriendsList.length === 0 && inputText.length !== 0 ? (
          <Text
            typo="Subhead_14"
            children="사용자를 찾을 수 없어요."
            color="gray_200"
          />
        ) : (
          newFriendsList.map((friend) => (
            <FriendsListB
              key={friend.neighborId}
              name={friend.neighborName}
              currentState={friend.onBoardingStatus}
              imageUrl={friend.neighborThumbnail}
              description={
                new Date(friend.updatedAt).getTime() >
                new Date(friend.viewedAt).getTime()
                  ? 'newUpdate'
                  : 'none'
              }
              onClick={() => handleClickFriend(friend.neighborId)}
            />
          ))
        )}
      </FriendsListWrapper>
    </>
  )
}

export default SearchFriends

const FriendsListWrapper = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 16px;
`
