import { TasteBoxVariantType } from '../favor/TasteType'

export type FriendRequestType = {
  neighborApplicationId: number
  toUserInfo: {
    id: 0
    userName: string
    userId: string
    imageUrl: string
    birth: string
    job: string
    createdAt: string
    gender: string
    onBoardingStatus: string
  }
  mutualNeighborCounts: number
  neighborApplicationStatus: string
}

export type FriendsType = {
  neighborId: number
  neighborThumbnail: string
  neighborBirth: string
  neighborName: string
  userFavorList: TasteBoxVariantType[]
  onBoardingStatus: string
  updatedAt: string
  viewedAt: string
}

export type NewFriendsType = {
  neighborId: number
  userId: number
  neighborThumbnail: string
  neighborName: string
  neighborBirth: string
  onBoardingStatus: string
  order: number
  updatedAt: string
  viewedAt: string
  new: boolean
  view: boolean
}

export type SearchedFriendType = {
  id: number
  userId: string
  userName: string
  imgUrl: string
  mutualFriends: number
  friend: boolean
}

export type ReportFriendDataType = {
  fromUserId: number
  toUserId: number
  reportSuccess: boolean
}
