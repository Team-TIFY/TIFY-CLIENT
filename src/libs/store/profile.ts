import { TodayCategoryValueType } from '@models/components/atoms/TodayCategory'
import { atom } from 'recoil'

export type ProfileStateType = {
  value: boolean
  isMenuOpen: boolean
  isEditImageMenuOpen: boolean
  isEdit: boolean
  pastTodayCategory: TodayCategoryValueType
}

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
