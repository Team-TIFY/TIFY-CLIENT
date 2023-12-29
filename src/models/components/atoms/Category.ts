import { SubCategoryNameType } from '@models/favor'

export type CategoryPropsType = {
  categoryName: SubCategoryNameType
  isFriend: boolean
  children: React.ReactNode[]
  allCategoryAnswered?: boolean
  onPlusButtonClick?: () => void
  onPresentButtonClick?: () => void
}

export type CategoryHeaderPropsType = {
  categoryName: SubCategoryNameType
  isFriend: boolean
  allCategoryAnswered: boolean
  onPlusButtonClick?: () => void
  onPresentButtonClick?: () => void
}

export type TagListItemPropsType = {
  children: React.ReactNode[]
}
