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

  const parseDateFromString = (stringDate: string) => {
    const year = parseInt(stringDate.substring(0, 4))
    const month = parseInt(stringDate.substring(4, 6)) - 1
    const day = parseInt(stringDate.substring(6, 8))

    return new Date(year, month, day)
  }

  const parseMonthAndDayFromString = (stringDate: string) => {
    const month = parseInt(stringDate.substring(4, 6))
    const day = parseInt(stringDate.substring(6, 8))

    return `${month}월 ${day}일`
  }

  const getDayStatus = (date: Date) => {
    const currentDate = new Date()
    currentDate.setHours(currentDate.getHours() + 9) // 한국 표준시로 변환 (UTC + 9)

    if (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth()
    ) {
      return '오늘'
    } else if (
      date.getDate() === currentDate.getDate() + 1 &&
      date.getMonth() === currentDate.getMonth()
    ) {
      return '내일'
    } else {
      return ''
    }
  }

  const formatDate = (date: string) => {
    const month = parseInt(date?.slice(4, 6)) - 1
    const day = parseInt(date?.slice(6))
    let formattedMonth

    switch (month) {
      case 0:
        formattedMonth = 'January'
        break
      case 1:
        formattedMonth = 'February'
        break
      case 2:
        formattedMonth = 'March'
        break
      case 3:
        formattedMonth = 'April'
        break
      case 4:
        formattedMonth = 'May'
        break
      case 5:
        formattedMonth = 'June'
        break
      case 6:
        formattedMonth = 'July'
        break
      case 7:
        formattedMonth = 'August'
        break
      case 8:
        formattedMonth = 'September'
        break
      case 9:
        formattedMonth = 'October'
        break
      case 10:
        formattedMonth = 'November'
        break
      case 11:
        formattedMonth = 'December'
        break
    }

    return `${formattedMonth} ${day}`
  }

  return {
    getTodayDate,
    setNewDate,
    parseDateFromString,
    getDayStatus,
    parseMonthAndDayFromString,
    formatDate,
  }
}

export default useGetDate
