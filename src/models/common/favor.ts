export type SubCategoryNameType =
  | '메이크업'
  | '프레그런스'
  | '의류'
  | '패션소품'
  | '디지털소품'
  | '가방'
  | '액세사리'
  | '요리'
  | '운동'

export type SubCategoryValueType =
  | 'MAKEUP'
  | 'FRAGRANCE'
  | 'CLOTHES'
  | 'FASHION_PRODUCT'
  | 'DIGITAL_PRODUCT'
  | 'BAG'
  | 'ACCESSORY'
  | 'COOKING'
  | 'EXERCISE'

export type DetailCategoryValueType =
  | 'LIP'
  | 'EYE'
  | 'PERFUME'
  | 'MOISTURE'
  | 'PLACE'
  | 'TOP'
  | 'FAS_PRODUCT'
  | 'DIG_PRODUCT'
  | 'BAG'
  | 'ACCESSORY'
  | 'DISH'
  | 'CUP'
  | 'EXERCISE'

export type QuestionCategoryType =
  | 'BMLIP'
  | 'BMEYE'
  | 'BFMOI'
  | 'BFPER'
  | 'BFPLA'
  | 'HCCUP'
  | 'HCDIS'
  | 'FCTOP'
  | 'FEFAS'
  | 'FEDIG'
  | 'FEBAG'
  | 'FAACC'
  | ''

export type SelectedTagType = {
  name: SubCategoryNameType
  value: SubCategoryValueType
}

export type SelectedPropsType = {
  id: number
  active: boolean
  name: SubCategoryNameType
  value: SubCategoryValueType
  count?: number
}[]
