import { atom } from 'recoil'

export type FriendState = {
  isToggle: boolean
  isAllRequest: boolean
  showPartialRequest: boolean
}

const initialState: FriendState = {
  isToggle: false,
  isAllRequest: false,
  showPartialRequest: false,
}

export const friendState = atom<FriendState>({
  key: 'friendState',
  default: initialState,
})
