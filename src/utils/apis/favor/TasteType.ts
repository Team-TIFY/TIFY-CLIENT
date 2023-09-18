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
