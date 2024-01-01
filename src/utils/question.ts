import { QuestionCategoryType } from '@models/common/favor'
import { DetailCategoryValueType as TasteBoxVariantType } from '@models/common/favor'

export const question: Record<TasteBoxVariantType, QuestionCategoryType> = {
  LIP: 'BMLIP',
  EYE: 'BMEYE',
  MOISTURE: 'BFMOI',
  PERFUME: 'BFPER',
  PLACE: 'BFPLA',
  CUP: 'HCCUP',
  DISH: 'HCDIS',
  TOP: 'FCTOP',
  FAS_PRODUCT: 'FEFAS',
  DIG_PRODUCT: 'FEDIG',
  BAG: 'FEBAG',
  ACCESSORY: 'FAACC',
  EXERCISE: '',
}
