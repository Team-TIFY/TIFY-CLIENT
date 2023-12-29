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
