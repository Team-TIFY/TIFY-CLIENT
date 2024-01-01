import { TodayKeyType } from '@models/components/atoms/DayWeek'

export const todayList: TodayKeyType[] = [0, 1, 2, 3, 4, 5, 6]

type WeeklyBoxType = { [key in TodayKeyType]: string }

export const weeklyList: WeeklyBoxType = {
  '-1': '',
  0: '/images/questionBox/mon.png',
  1: '/images/questionBox/tue.png',
  2: '/images/questionBox/wed.png',
  3: '/images/questionBox/thur.png',
  4: '/images/questionBox/fri.png',
  5: '/images/questionBox/sat.png',
  6: '/images/questionBox/sun.png',
}
