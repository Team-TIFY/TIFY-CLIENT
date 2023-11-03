import { atom } from 'recoil'

export type FriendState = {
  isToggle: boolean
  isAllRequest: boolean
  showPartialRequest: boolean
  isMenuOpen: boolean
  isCutOffMenuOpen: boolean
  isBlockMenuOpen: boolean
}

const initialState: FriendState = {
  isToggle: false,
  isAllRequest: false,
  showPartialRequest: false,
  isMenuOpen: false,
  isCutOffMenuOpen: false,
  isBlockMenuOpen: false,
}

export const friendState = atom<FriendState>({
  key: 'friendState',
  default: initialState,
})
