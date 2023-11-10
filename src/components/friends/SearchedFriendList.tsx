import { Spacing } from '@components/atoms/Spacing'
import SearchedFriend from './SearchedFriendItem'
import { friendState } from '@libs/store/friend'
import { useRecoilValue } from 'recoil'
import { SearchedFriendType } from '@utils/apis/friends/FriendsType'
import { Text } from '@components/atoms/Text'
import { authState } from '@libs/store/auth'

type SearchedFriendListPropsType = {
  searchFriendData?: SearchedFriendType
  isSearchFriendId: boolean
}

const SearchedFriendList = ({
  searchFriendData,
  isSearchFriendId,
}: SearchedFriendListPropsType) => {
  const friendStateData = useRecoilValue(friendState)
  const auth = useRecoilValue(authState)

  if (friendStateData.isToggle) {
    if (searchFriendData) {
      if (searchFriendData.userName === auth.userProfile.userName) {
        return (
          <>
            <Spacing height={32} />
            <Text
              typo="Subhead_14"
              children="나 자신은 나의 가장 친한 친구! "
              color="gray_200"
            />
          </>
        )
      }
      if (!searchFriendData.friend) {
        return (
          <>
            <Spacing height={20} />
            <SearchedFriend friendData={searchFriendData} />
          </>
        )
      } else if (searchFriendData.friend) {
        return (
          <>
            <Spacing height={32} />
            <Text
              typo="Subhead_14"
              children="이미 친구 사이예요 :)"
              color="gray_200"
            />
          </>
        )
      }
    } else if (isSearchFriendId) {
      return (
        <>
          <Spacing height={32} />
          <Text
            typo="Subhead_14"
            children="사용자를 찾을 수 없어요."
            color="gray_200"
          />
        </>
      )
    }
  }
  return null
}

export default SearchedFriendList
