import { TodayKeyType } from "@components/atoms/DayWeek/WeekGroup"

const useGetDate = () => {

    const getTodayWeek = (date: string):TodayKeyType => {
        const dayOfWeek = new Date(date).getDay() as TodayKeyType
        return dayOfWeek
    }

    const getTodayDate = () : [string, TodayKeyType] => {
        const today = new Date();
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        const day = ('0' + today.getDate()).slice(-2)
        const dateString = year + '-' + month + '-' + day
        let todayKey = getTodayWeek(dateString) - 1 as TodayKeyType
        if(todayKey === -1) todayKey = 0 
        return [dateString, todayKey]
    }

    return { getTodayDate }
}

export default useGetDate