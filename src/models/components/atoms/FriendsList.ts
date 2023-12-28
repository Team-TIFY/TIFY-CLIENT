import { TasteBoxVariantType } from '@utils/apis/favor/TasteType'

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
