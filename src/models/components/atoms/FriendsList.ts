import { TasteBoxVariantType } from '@models/apis/TasteType'

export type FriendsListVariantType = 'visible' | 'invisible'

export type FriendsListAPropsType = {
  variant?: FriendsListVariantType
  userName: string
  userId: string
  onClick?: () => void
}

export type DescriptionType = 'birthday' | 'none' | 'newUpdate'

export type FriendsListBPropsType<T extends DescriptionType> = {
  userName: string
  currentState: string
  onClick?: () => void
  imageUrl: string
  description: T
  birthdayDescription?: T extends 'birthday' ? string : undefined
  birthday?: T extends 'birthday' ? string : undefined
}

export type FriendsDescriptionType = {
  description: DescriptionType
  userName: string
  birthdayDescription?: string
  birthday?: string
}

export type FriendsCurrentStateType = {
  currentState: string
}

export type FriendsListCPropsType = {
  userName: string
  currentState: string
  imageUrl: string
  favorList: TasteBoxVariantType[]
  onClick?: () => void
}

export type FriendsListInfoPropsType = {
  imageUrl: string
  userName: string
  currentState: string
}

export type FriendsFavorItemsPropsType = {
  favorList: TasteBoxVariantType[]
}

export type FriendsListDPropsType = {
  userId: string
  friendsNumber: number
  isAccepted?: boolean
  onClick?: () => void
  onAcceptButtonClick?: () => void
  onDeleteButtonClick?: () => void
}

export type FriendsListDInfoPropsType = {
  userId: string
  friendsNumber: number
}

export type FriendsListDButtonPropsType = {
  isAccepted: boolean
  onAcceptButtonClick?: () => void
  onDeleteButtonClick?: () => void
}

export type FriendsListEPropsType = {
  imageUrl: string
  userId: string
  userName: string
  neighborsNumber: number
  onClick?: () => void
}
