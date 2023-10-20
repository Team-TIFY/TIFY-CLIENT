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
  neighborApplicationStatus: string
}

export type FriendsType = {
  neighborId: number
  neighborUserId: string
  neighborThumbnail: string
  neighborName: string
  neighborBirth: string
  onBoardingStatus: string
  order: number
  updatedAt: string
  viewedAt: string
  view: boolean
}
