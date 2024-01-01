import { atom } from 'recoil'

import { ProfileStateType } from '@models/stores/profile'

const initialState: ProfileStateType = {
  value: true,
  isMenuOpen: false,
  isEditImageMenuOpen: false,
  isEdit: false,
  pastTodayCategory: 'FOOD',
}

export const profileState = atom<ProfileStateType>({
  key: 'profileState',
  default: initialState,
})
