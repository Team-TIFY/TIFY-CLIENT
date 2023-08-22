import { FlexBox } from "@components/layouts/FlexBox"
import { Text } from "@components/atoms/Text"
import { Spacing } from "@components/atoms/Spacing"
import { useRecoilState } from "recoil"
import { questionState } from "@libs/store/question"
import { DailyQuestionInfo } from "@libs/types/questionType"
import { dateState } from "@libs/store/date"
import { useMutation } from "@tanstack/react-query"
import { WeeklyApi } from "@utils/apis/weekly/WeeklyApi"
import { useEffect, useState } from "react"
import useGetDate from "@libs/hooks/useGetDate"

const DailyQuestionBox = () => {
    const [date, setDate] = useRecoilState(dateState)
    const { getTodayDate, setNewDate } = useGetDate()
    const [question, setQuestion] = useRecoilState(questionState)
    const [day, setDay] = useState<string>('')
    const getQuestionMutation = useMutation(WeeklyApi.GET_QUESTIONS, {
        onSuccess: (data: DailyQuestionInfo) => {
            setQuestion({
                questionId: data.questionId,
                content: data.content,
                category: data.category,
                loadingData: data.loadingData
            })
        }
    })
    useEffect(() => {
        if(localStorage.getItem('date') && (localStorage.getItem('date') !== '0')){
            const dateIdx = parseInt(localStorage.getItem('date')!, 10)
            setNewDate(dateIdx)
        } else {
            getTodayDate()
        }
    }, [])

    useEffect(() => {
        if(date.dateString.length > 0)
            getQuestionMutation.mutate(date.dateString)
            getDayWeek(date.selectedDate)
        }, [date.dateString])
    
    const getDayWeek = (day : number) => {
        if(date.selectedDate === date.today){
            setDay('오늘')
            return
        }
        switch (day){
            case 0:
                setDay('월요일')
                break;
            case 1:
                setDay('화요일')
                break;
            case 2:
                setDay('수요일')
                break;
            case 3:
                setDay('목요일')
                break;
            case 4:
                setDay('금요일')
                break;
            case 5:
                setDay('토요일')
                break;
            case 6:
                setDay('일요일')
                break;
        }
    }

    return (
        <>
            <Spacing variant='default' height={48}/>
            <FlexBox direction={'column'} gap={8}>
                <Text as={'div'} typo={'Caption_12R'} color="gray_200">
                    {day}의 질문
                </Text>
                <Text typo={'SCD_Headline_24'} color="white">짬뽕 vs 짜장</Text>
                <Spacing variant="default" height={64}/>
            </FlexBox>
        </>
    )
}

export default DailyQuestionBox