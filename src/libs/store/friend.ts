import { CategoryNameType } from '@components/atoms/Category'
import { atom } from 'recoil'

export type FriendState = {
  isToggle: boolean
  isAllRequest: boolean
  showPartialRequest: boolean
  isMenuOpen: boolean
  isCutOffMenuOpen: boolean
  isBlockMenuOpen: boolean
  isCancelBlockMenuOpen: boolean
  presentRecommendFilterValue: CategoryNameType | ''
}

const initialState: FriendState = {
  isToggle: false,
  isAllRequest: false,
  showPartialRequest: false,
  isMenuOpen: false,
  isCutOffMenuOpen: false,
  isBlockMenuOpen: false,
  isCancelBlockMenuOpen: false,
  presentRecommendFilterValue: '',
}

export const friendState = atom<FriendState>({
  key: 'friendState',
  default: initialState,
})
