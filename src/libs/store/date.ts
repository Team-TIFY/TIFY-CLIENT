import { atom } from 'recoil'
import { TodayKeyType } from '@models/components/atoms/DayWeek'

export type WeeklyDateType = {
  today: TodayKeyType
  selectedDate: TodayKeyType
  dateString: string
}

const initialState: WeeklyDateType = {
  today: 0,
  selectedDate: 0,
  dateString: '',
}

export const dateState = atom<WeeklyDateType>({
  key: 'weeklyDate',
  default: initialState,
})
