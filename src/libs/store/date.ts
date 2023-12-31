import { atom } from 'recoil'

import { WeeklyDateType } from '@models/stores/date'

const initialState: WeeklyDateType = {
  today: 0,
  selectedDate: 0,
  dateString: '',
}

export const dateState = atom<WeeklyDateType>({
  key: 'weeklyDate',
  default: initialState,
})
