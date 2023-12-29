import { SubCategoryValueType, DetailCategoryValueType } from '@models/favor'

export type TagPropsType = {
  children: string
  colorIndex: ColorIndexVariantType
  iconIndex: number
  smallCategory: SubCategoryValueType
  detailCategory: DetailCategoryValueType
  answerNumber: number
}

export type TagVariantType = 'main' | 'dark'

export type ColorVariantType = 'purple' | 'pink' | 'aqua'

export type ColorIndexVariantType = 0 | 1 | 2 | 3 | 4 | 5
