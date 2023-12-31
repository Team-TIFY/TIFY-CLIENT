import { SubCategoryType } from '@models/apis/UserType'
import { atom } from 'recoil'

export const subCategoryState = atom<SubCategoryType | ''>({
  key: 'subCategoryState',
  default: '',
})
