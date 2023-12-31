import { DailyFriendsType } from '@apis/friends/FriendsType'

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
  neighborInfo: DailyFriendsType
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
  | 'CULTURE_LIFE'
  | 'ME'

export const DailyQuestionCategory: Record<DailyQuestionCategoryType, string> =
  {
    FOOD: '/images/food.png',
    MUSIC: '/images/music1.png',
    RELATIONSHIP: '/images/relation.png',
    TRIP: '/images/passport.png',
    BEVERAGE: '/images/drink.png',
    CULTURE_LIFE: '/images/drum.png',
    ME: '/images/aboutme.png',
  }

export const DailyQuestionVideoCategory: Record<
  DailyQuestionCategoryType,
  string
> = {
  FOOD: '/videos/food.mp4',
  MUSIC: '/videos/music.mp4',
  RELATIONSHIP: '/videos/relation.mp4',
  TRIP: '/videos/passport.mp4',
  BEVERAGE: '/videos/drink.mp4',
  CULTURE_LIFE: '/videos/drum.mp4',
  ME: '/videos/my.mp4',
}

export interface DailyQuestionReport {
  userId: number
  answerId: number
  reportSuccess: boolean
}
