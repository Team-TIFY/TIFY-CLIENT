import { TodayCategoryValueType } from '@components/atoms/TodayCategoryList'

export type TodayCategoryVariantType = 'activate' | 'default'

export type TodayCategoryPropsType = {
  categoryName: string
  categoryValue: TodayCategoryValueType
  infoCount: number
  id?: number
}
