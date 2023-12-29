export type TodayCategoryVariantType = 'activate' | 'default'

export type TodayCategoryPropsType = {
  categoryName: string
  categoryValue: TodayCategoryValueType
  infoCount: number
  id?: number
}

export type TodayCategoryValueType =
  | 'FOOD'
  | 'MUSIC'
  | 'RELATIONSHIP'
  | 'BEVERAGE'
  | 'CULTURE_LIFE'
  | 'TRIP'
  | 'ME'

export type TodayCategoryListPropsType = {
  defaultCategory?: TodayCategoryValueType
}

export type TodayAnswerType = {
  answerTime: string
  question: string
  answer: string
}

export type TodayListPropsType = {
  todayAnswerList: TodayAnswerType[]
  isLastMonth: boolean
}

export type TodayListHeaderPropsType = {
  index: number
  formattedYear: string
  formattedMonth: string
  formattedDate: string
}

export type TodayQnAPropsType = {
  answer: TodayAnswerType
}
