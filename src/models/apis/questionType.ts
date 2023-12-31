import { DailyFriendsType } from '@models/apis/FriendsType'

export type DailyQuestionInfoType = {
  questionId: number
  content: string
  category: DailyQuestionCategoryType
  loadingData: string
}

export type CountDailyQuestionType = {
  answerCount: number
}

export type NeighborAnswerListInfoType = {
  neighborInfo: DailyFriendsType
  answerInfo: DailyAnswerInfoType
  neighborKnocked: boolean
}

export type DailyAnswerInfoType = {
  id: number
  questionId: number
  userId: number
  content: string
}

export type DailyAnswerContentInfoType = {
  answerInfo: DailyAnswerInfoType
  isMine: boolean
}

export type DailyQuestionCategoryType =
  | 'FOOD'
  | 'MUSIC'
  | 'RELATIONSHIP'
  | 'TRIP'
  | 'BEVERAGE'
  | 'CULTURE_LIFE'
  | 'ME'

export type DailyQuestionReportType = {
  userId: number
  answerId: number
  reportSuccess: boolean
}
