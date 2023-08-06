import { Spacing } from "@components/atoms/Spacing"
import { Text } from "@components/atoms/Text"
import { Week } from "@components/atoms/DayWeek/WeekGroup/Week"
import styled from "@emotion/styled"
import useGetDate from "@libs/hooks/useGetDate"
import { useEffect, useState } from "react"
import { TodayKeyType } from "@components/atoms/DayWeek/WeekGroup"

export const WeeklyQuestion = () => {
    const [date, setDate] = useState<[string, TodayKeyType]>(['', 0])
    const { getTodayDate } = useGetDate()
    useEffect(() => {
        setDate(getTodayDate)
    },[])
    console.log(date)
    return (
        <WeekContainer>
            <Spacing variant='default' height={48}/>
            <Week today={date[1]} getNewDate={setDate}/>
            <Text typo={'Body_14'} color="white">데일리 질문</Text>
        </WeekContainer>
    )
}

const WeekContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`