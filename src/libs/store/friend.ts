import { SubCategoryValueType } from '@models/favor'
import { atom } from 'recoil'

export type FriendStateType = {
  isToggle: boolean
  isAllRequest: boolean
  showPartialRequest: boolean
  isMenuOpen: boolean
  isCutOffMenuOpen: boolean
  isBlockMenuOpen: boolean
  isCancelBlockMenuOpen: boolean
  presentRecommendFilterValue: SubCategoryValueType | ''
}

const initialState: FriendStateType = {
  isToggle: false,
  isAllRequest: false,
  showPartialRequest: false,
  isMenuOpen: false,
  isCutOffMenuOpen: false,
  isBlockMenuOpen: false,
  isCancelBlockMenuOpen: false,
  presentRecommendFilterValue: '',
}

export const friendState = atom<FriendStateType>({
  key: 'friendState',
  default: initialState,
})
