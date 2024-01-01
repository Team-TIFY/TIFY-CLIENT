import { DetailCategoryValueType as TasteBoxVariantType } from '@models/common/favor'

export type ProfileBoxVariantType = 'profile' | 'shareProfile'

export type ProfileBoxPropsType = {
  variant?: ProfileBoxVariantType
  favorList: TasteBoxVariantType[]
}
