export type TasteType =
  | 'BMLIP'
  | 'BMEYE'
  | 'BFPER'
  | 'BFMOI'
  | 'BFPLA'
  | 'FCTOP'
  | 'FEFAS'
  | 'FEDIG'
  | 'FEBAG'
  | 'FAACC'
  | 'HCDIS'
  | 'HCCUP'
  | 'HEEXE'

export type FavorQuestionRequestType = {
  category: TasteType
  number: number
}

export type FavorQuestionResponseType = {
  favorQuestionId: number
  favorQuestionCategoryName: string
  number: number
  contents: string
}

export type FavorAnswerDetailRequest = {
  num: number
  answer: string
}

export type FavorAnswerRequestType = {
  categoryName: string
  favorAnswerDtos: FavorAnswerDetailRequest[]
}

export type FavorAnswerResponseType = {
  success: boolean
  statusCode: number
  data: string | null
}

export type TasteBoxVariantType =
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
