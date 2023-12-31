import { SubCategoryValueType } from '@models/common/favor'

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
