import { SubCategoryType } from '@utils/apis/user/UserType'
import { atom } from 'recoil'

export const subCategoryState = atom<SubCategoryType | ''>({
  key: 'subCategoryState',
  default: '',
})
