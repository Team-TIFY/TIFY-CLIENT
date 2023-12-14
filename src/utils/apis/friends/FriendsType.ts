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
  neighborUserId: string
  userId: number
  neighborThumbnail: string
  neighborName: string
  neighborBirth: string
  onBoardingStatus: string
  order: number
  updatedAt: string
  viewedAt: string
  view: boolean
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
