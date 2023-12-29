export type DaysKeyType = 'M' | 'T' | 'W' | 'T' | 'F' | 'S' | 'S'

export type TodayKeyType = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6

export type DayVariantType = 'dayBefore' | 'selected' | 'dayAfter'

export type WeekPropsType = {
  today: TodayKeyType
}

export type DayPropsType = {
  children: DaysKeyType
  variant: DayVariantType
  leftDown: boolean
  onClick: () => void
}
