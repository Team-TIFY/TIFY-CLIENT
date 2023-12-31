import { atom } from 'recoil'

import { FriendStateType } from '@models/stores/friend'

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
