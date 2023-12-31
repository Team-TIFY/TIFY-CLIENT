import { SubCategoryValueType } from '@models/favor'
import { atom } from 'recoil'

export const subCategoryState = atom<SubCategoryValueType | ''>({
  key: 'subCategoryState',
  default: '',
})
