import { atom } from 'recoil'

import { SubCategoryValueType } from '@models/common/favor'

export const subCategoryState = atom<SubCategoryValueType | ''>({
  key: 'subCategoryState',
  default: '',
})
