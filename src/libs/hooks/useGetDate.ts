import { TodayKeyType } from '@components/atoms/DayWeek/WeekGroup'
import { dateState } from '@libs/store/date'
import { useRecoilState } from 'recoil'

const useGetDate = () => {
  const [date, setDate] = useRecoilState(dateState)
  const getTodayWeek = (date: string): TodayKeyType => {
    const dayOfWeek = new Date(date).getDay() as TodayKeyType
    return dayOfWeek
  }

  const parseDate = (date: Date) => {
    const year = date.getFullYear()
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)
    const dateString = year + '-' + month + '-' + day
    return dateString
  }

  const getTodayDate = (): [string, TodayKeyType] => {
    const today = new Date()
    const dateString = parseDate(today)
    let todayKey = (getTodayWeek(dateString) - 1) as TodayKeyType
    if (todayKey === -1) todayKey = 6
    setDate({
      selectedDate: todayKey,
      today: todayKey,
      dateString: dateString,
    })
    return [dateString, todayKey]
  }

  const setNewDate = (daydiffer: number) => {
    const stateDate = new Date()
    const newDate = new Date(stateDate.setDate(stateDate.getDate() - daydiffer))
    const dateString = parseDate(newDate)
    let selectedKey = (getTodayWeek(dateString) - 1) as TodayKeyType
    const todayString = parseDate(new Date())
    let todayKey = (getTodayWeek(todayString) - 1) as TodayKeyType
    if (todayKey === -1) todayKey = 6
    if (selectedKey === -1) selectedKey = 6
    setDate({
      today: todayKey,
      selectedDate: selectedKey,
      dateString: dateString,
    })
  }

  return { getTodayDate, setNewDate }
}

export default useGetDate
