import { TodayKeyType } from "@components/atoms/DayWeek/WeekGroup"
import { useState } from "react"

const useGetDate = () => {
    const getTodayWeek = (date: string):TodayKeyType => {
        const dayOfWeek = new Date(date).getDay() as TodayKeyType
        return dayOfWeek
    }

    const parseDate = (date : Date) => {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const day = ('0' + date.getDate()).slice(-2)
        const dateString = year + '-' + month + '-' + day
        return dateString
    }

    const getTodayDate = () : [string, TodayKeyType] => {
        const today = new Date();
        const dateString = parseDate(today)
        let todayKey = getTodayWeek(dateString) - 1 as TodayKeyType
        if(todayKey === -1) todayKey = 0 
        return [dateString, todayKey]
    }

    const setNewDate = (daydiffer : number) => {
        const stateDate = new Date()
        const newDate = new Date(stateDate.setDate(stateDate.getDate() - daydiffer))
        const dateString = parseDate(newDate)
        let todayKey = getTodayWeek(dateString) - 1 as TodayKeyType
        return [dateString, todayKey] as [string, TodayKeyType]
    }

    return { getTodayDate, setNewDate }
}

export default useGetDate