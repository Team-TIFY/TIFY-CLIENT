import {
  SearchedFriendType,
  FriendsType,
  NewFriendsType,
  FriendRequestType,
} from '@models/apis/FriendsType'

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

export type FriendsListCItemPropsType = {
  friendsList: FriendsType[]
  alignLeft: boolean
}

export type FriendsListDItemPropsType = {
  friendsList: FriendRequestType[]
}
