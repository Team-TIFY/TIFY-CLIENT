import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { WeeklyApi } from '@apis/weekly/WeeklyApi'
import { DailyQuestionInfoType } from '@models/apis/QuestionType'
import { useRecoilState } from 'recoil'
import { questionState } from '@libs/store/question'
import { dateState } from '@libs/store/date'
import useGetDate from '@libs/hooks/useGetDate'
import { Outlet } from 'react-router-dom'

const CheckTodayDate = () => {
  const [date, setDate] = useRecoilState(dateState)
  const { getTodayDate, setNewDate } = useGetDate()
  const [question, setQuestion] = useRecoilState(questionState)
  const getQuestionMutation = useMutation(WeeklyApi.GET_QUESTIONS, {
    onSuccess: (data: DailyQuestionInfoType) => {
      setQuestion({
        questionId: data.questionId,
        content: data.content,
        category: data.category,
        loadingData: data.loadingData,
      })
    },
  })
  useEffect(() => {
    getTodayDate()
  }, [])

  useEffect(() => {
    if (date.dateString.length > 0) getQuestionMutation.mutate(date.dateString)
  }, [date.dateString])
  return <Outlet />
}

export default CheckTodayDate
