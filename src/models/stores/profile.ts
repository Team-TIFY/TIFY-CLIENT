import { TodayCategoryValueType } from '@models/components/atoms/TodayCategory'

export type ProfileStateType = {
  value: boolean
  isMenuOpen: boolean
  isEditImageMenuOpen: boolean
  isEdit: boolean
  pastTodayCategory: TodayCategoryValueType
}
