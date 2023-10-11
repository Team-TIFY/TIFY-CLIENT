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

export interface FavorQuestionRequest {
  category: TasteType
  number: number
}

export interface FavorQuestionResponse {
  favorQuestionId: number
  favorQuestionCategoryName: string
  number: number
  contents: string
}

export interface FavorAnswerDetailRequest {
  num: number
  answer: string
}

export interface FavorAnswerRequest {
  categoryName: string
  favorAnswerDtos: FavorAnswerDetailRequest[]
}

export interface FavorAnswerResponse {
  success: boolean
  statusCode: number
  data: string | null
}