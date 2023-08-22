import { Spacing } from "@components/atoms/Spacing"
import { Text } from "@components/atoms/Text"
import { Week } from "@components/atoms/DayWeek/WeekGroup/Week"
import styled from "@emotion/styled"
import useGetDate from "@libs/hooks/useGetDate"
import { useEffect, useState } from "react"
import { dateState } from "@libs/store/date"
import { useRecoilState } from "recoil"
import { FlexBox } from "@components/layouts/FlexBox"
import { WeeklyApi } from "@utils/apis/weekly/WeeklyApi"
import { useMutation } from "@tanstack/react-query"
import { DailyQuestionInfo } from "@libs/types/questionType"

export const WeeklyMainQuestion = () => {
    const [date, setDate] = useRecoilState(dateState)
    const [question, setQuestion] = useState('')
    const { getTodayDate } = useGetDate()

    const getQuestionMutation = useMutation(WeeklyApi.GET_QUESTIONS, {
        onSuccess: (data: DailyQuestionInfo) => {
            setQuestion(data.content)
        }
    })

    useEffect(() => {
        getTodayDate()
    },[])
    useEffect(() => {
        if(date.dateString.length > 0)
            getQuestionMutation.mutate(date.dateString)
    }, [date.selectedDate])
    return (
        <WeekContainer>
            <BackgroundImg/>
            <WeekWrapper>
                <Spacing variant='default' height={48}/>
                <Week today={date.today}/>
                <Spacing variant='default' height={48}/>
                <FlexBox direction={'column'} gap={8}>
                    <Text as={'div'} typo={'Caption_12R'} color="gray_200">
                        데일리 질문
                    </Text>
                    <Text typo={'SCD_Headline_24'} color="white" style={{width: '80%', textAlign:'center'}}>{question}</Text>
                </FlexBox>
                <div style={{background:'rgb(255, 153, 207, 0.3)', height:'242px', margin: '60px 0px', color: 'white', textAlign:'center'}}>
                    이미지 영역
                </div>
            </WeekWrapper>
        </WeekContainer>
    )
}

const WeekContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    background-color: #2E2159;
    position: relative;
`
const BackgroundImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/weekly_background.png');
    background-size: cover;
    position: absolute;
    top: 0;
`
const WeekWrapper = styled.div`
    width :100%;
    position: absolute;
    z-index: 1;
`