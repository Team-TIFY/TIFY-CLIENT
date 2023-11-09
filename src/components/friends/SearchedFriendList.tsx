import { Spacing } from '@components/atoms/Spacing'
import SearchedFriend from './SearchedFriendItem'
import FriendNotFound from './FriendNotFound'
import { friendState } from '@libs/store/friend'
import { useRecoilValue } from 'recoil'
import { SearchedFriendType } from '@utils/apis/friends/FriendsType'

type SearchedFriendListPropsType = {
  searchFriendList?: SearchedFriendType
  isSearchFriendId: boolean
}

const SearchedFriendList = ({
  searchFriendList,
  isSearchFriendId,
}: SearchedFriendListPropsType) => {
  const friendStateData = useRecoilValue(friendState)

  if (friendStateData.isToggle) {
    if (searchFriendList) {
      return (
        <>
          <Spacing height={20} />
          <SearchedFriend friendData={searchFriendList} />
        </>
      )
    } else if (isSearchFriendId) {
      return (
        <>
          <Spacing height={32} />
          <FriendNotFound />
        </>
      )
    }
  }
  return null
}

export default SearchedFriendList
