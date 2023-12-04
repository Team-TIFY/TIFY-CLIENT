import { TodayCategoryValueType } from '@components/atoms/TodayCategoryList'

export interface UserInfo {
  id: number
  userId: string
  userName: string
  email: string
  thumbnail: string
  birth: string
  job: string
  gender: string
  onBoardingStatus: string
  blocked: boolean
  friend: boolean
  receivedApplication: object
  sentApplication: object
}

export interface UserInfoToken {
  id: number
  userName: string
  userId: string
  imageUrl: string
  email: string
  birth: string
  job: string
  gender: string
  createdAt: string
  onBoardingStatus: string
}

export interface UserTag {
  userTagId: number
  largeCategory: string
  favors: {
    userFavorId: number
    smallCategory: string
  }[]
}

export interface FilteredUserTag {
  smallCategory: SubCategoryType
  answerContentList: string[]
}

export interface SelectedTag {
  name: SubCategoryName
  value: SubCategoryType
}

export type SelectedProps = {
  id: number
  active: boolean
  name: SubCategoryName
  value: SubCategoryType
  count?: number
}[]

export interface UserNewTasteCategory {
  smallCategory: SubCategoryType
  isAnswered: boolean
}

export interface IsAnsweredCategory {
  detailCategory: SubCategoryType
  answered: boolean
}

export type PastTodayCategoryCountType = {
  dailyQuestionCategory: TodayCategoryValueType
  count: number
}

export type PastTodayAnswerType = {
  month: number
  answerTime: string
  questionId: number
  question: string
  answerId: number
  answer: string
}

export type SubCategoryType =
  | 'MAKEUP'
  | 'FRAGRANCE'
  | 'CLOTHES'
  | 'FASHION_PRODUCT'
  | 'BAG'
  | 'ACCESSORY'
  | 'COOKING'
  | 'EXERCISE'
  | 'TRAVEL'
  | 'CULTURE_LIFE'

export type CategoryType = 'BEAUTY' | 'FASHION' | 'HOBBY'

export type SubCategoryName =
  | '메이크업'
  | '프레그런스'
  | '의류'
  | '패션소품'
  | '가방'
  | '액세사리'
  | '요리'
  | '운동'
  | '여행'
  | '문화생활'
