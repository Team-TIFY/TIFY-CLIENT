import { TodayCategoryValueType } from '@models/components/atoms/TodayCategory'
import { SubCategoryNameType, SubCategoryValueType } from '@models/favor'
import { TasteBoxVariantType } from './TasteType'

export type UserInfo = {
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
  userFavorList: TasteBoxVariantType[]
}

export type UserInfoToken = {
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

export type UserTag = {
  userTagId: number
  largeCategory: string
  favors: {
    userFavorId: number
    smallCategory: string
  }[]
}

export type answerContentType = {
  detailCategory: string
  number: number
  answerContent: string
}

export type FilteredUserTag = {
  smallCategory: SubCategoryValueType
  answerContentList: answerContentType[]
  notAnsweredDetailCategories: any[]
  allDetailCategoryAnswered: boolean
}

export type SelectedTag = {
  name: SubCategoryNameType
  value: SubCategoryValueType
}

export type SelectedProps = {
  id: number
  active: boolean
  name: SubCategoryNameType
  value: SubCategoryValueType
  count?: number
}[]

export type UserNewTasteCategory = {
  smallCategory: SubCategoryValueType
  isAnswered: boolean
}

export type IsAnsweredCategory = {
  detailCategory: SubCategoryValueType
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

export type CategoryType = 'BEAUTY' | 'FASHION' | 'HOBBY'

export type EditUserProfileDataType = {
  username: string
  birth: string
  job?: string
  gender?: string
  thumbnail?: string
  userId: string
  onBoardingStatus: string
}

export type FavorBoxType = {
  userFavorId: number
  largeCategory: string
  smallCategory: string
  detailCategory: TasteBoxVariantType
}
