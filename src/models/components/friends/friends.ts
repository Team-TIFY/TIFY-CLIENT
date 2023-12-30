import {
  FriendsType,
  NewFriendsType,
  SearchedFriendType,
} from '@models/apis/friends/FriendsType'

export type SearchedFriendItemPropsType = {
  friendData: SearchedFriendType
}

export type SearchedFriendListPropsType = {
  searchFriendData?: SearchedFriendType
  isSearchFriendId: boolean
}

export type FriendsListBItemPropsType = {
  friendsList: FriendsType[] | NewFriendsType[]
  description?: 'birthday'
  isNewFriendsList?: boolean
}
