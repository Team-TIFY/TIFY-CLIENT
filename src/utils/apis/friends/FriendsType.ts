import { TasteBoxVariantType } from '../favor/TasteType'

export type FriendRequestType = {
  neighborApplicationId: number
  toUserInfo: {
    id: number
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

export type DailyFriendsType = {
  neighborId: number
  neighborUserId: number
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

export type FriendsType = {
  neighborId: number
  userId: number
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
export type PokeCountType = {
  fromUserId: number
  knockedUserId: number
  knockCount: number
}
