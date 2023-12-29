import { TasteBoxVariantType } from '@utils/apis/favor/TasteType'

export type ProfileBoxVariantType = 'profile' | 'shareProfile'

export type ProfileBoxPropsType = {
  variant?: ProfileBoxVariantType
  favorList: TasteBoxVariantType[]
}
