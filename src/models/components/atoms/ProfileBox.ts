import { TasteBoxVariantType } from '@models/apis/TasteType'

export type ProfileBoxVariantType = 'profile' | 'shareProfile'

export type ProfileBoxPropsType = {
  variant?: ProfileBoxVariantType
  favorList: TasteBoxVariantType[]
}
