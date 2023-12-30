import { SearchedFriendType } from '@models/apis/friends/FriendsType'

export type SearchedFriendItemPropsType = {
  friendData: SearchedFriendType
}

export type SearchedFriendListPropsType = {
  searchFriendData?: SearchedFriendType
  isSearchFriendId: boolean
}
