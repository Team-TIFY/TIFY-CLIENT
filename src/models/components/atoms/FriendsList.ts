export type FriendsListVariantType = 'visible' | 'invisible'

export type FriendsListAPropsType = {
  variant?: FriendsListVariantType
  userName: string
  userId: string
  onClick?: () => void
}
