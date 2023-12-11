import { FriendsType } from '@utils/apis/friends/FriendsType'

export interface DailyQuestionInfo {
  questionId: number
  content: string
  category: DailyQuestionCategoryType
  loadingData: string
}

export interface CountDailyQuestion {
  answerCount: number
}

export interface NeighborAnswerListInfo {
  neighborInfo: FriendsType
  answerInfo: DailyAnswerInfo
  neighborKnocked: boolean
}

export interface DailyAnswerInfo {
  id: number
  questionId: number
  userId: number
  content: string
}

export interface DailyAnswerContentInfo {
  answerInfo: DailyAnswerInfo
  isMine: boolean
}
export type DailyQuestionCategoryType =
  | 'FOOD'
  | 'MUSIC'
  | 'RELATIONSHIP'
  | 'TRIP'
  | 'BEVERAGE'
  | 'MY'

export const DailyQuestionCategory: Record<DailyQuestionCategoryType, string> =
  {
    FOOD: '/images/food.png',
    MUSIC: '/images/music1.png',
    RELATIONSHIP: '/images/relation.png',
    TRIP: '/images/travel.png',
    BEVERAGE: '/images/drink.png',
    MY: '/images/my.png',
  }

export interface DailyQuestionReport {
  userId: number
  answerId: number
  reportSuccess: boolean
}
