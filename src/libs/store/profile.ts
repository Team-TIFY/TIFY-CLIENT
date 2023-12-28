import { TodayCategoryValueType } from '@components/atoms/TodayCategoryList'
import { atom } from 'recoil'

export type ProfileState = {
  value: boolean
  isMenuOpen: boolean
  isEditImageMenuOpen: boolean
  isEdit: boolean
  pastTodayCategory: TodayCategoryValueType
}

const initialState: ProfileState = {
  value: true,
  isMenuOpen: false,
  isEditImageMenuOpen: false,
  isEdit: false,
  pastTodayCategory: 'FOOD',
}

export const profileState = atom<ProfileState>({
  key: 'profileState',
  default: initialState,
})
