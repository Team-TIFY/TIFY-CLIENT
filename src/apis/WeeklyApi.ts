import { axiosApi } from '@apis/axios'
import {
  CountDailyQuestionType,
  DailyAnswerContentInfoType,
  DailyQuestionInfoType,
  DailyQuestionReportType,
  NeighborAnswerListInfoType,
} from '@models/apis/QuestionType'

export const WeeklyApi = {
  GET_QUESTIONS: async (date: string): Promise<DailyQuestionInfoType> => {
    const response = await axiosApi.get(`/daily-questions?loadingDate=${date}`)
    return response.data.data.dailyQuestionInfo
  },

  ANSWER_QUESTION: async ({
    questionId,
    answer,
  }: {
    questionId: number
    answer: string
  }) => {
    const response = await axiosApi.post(
      `/daily-questions/${questionId}/answers`,
      {
        answer: answer,
      },
    )
    return response.data
  },

  ALREADY_ANSWERED: async (questionId: number): Promise<boolean> => {
    const response = await axiosApi.get(
      `/daily-questions/${questionId}/user/answers/exists`,
    )
    return response.data.data
  },

  COUNT_ANSWER: async (questionId: number): Promise<CountDailyQuestionType> => {
    const response = await axiosApi.get(`/${questionId}/answers/counts`)
    return response.data.data
  },

  GET_ANSWERS: async ({
    questionId,
  }: {
    questionId: number
  }): Promise<DailyAnswerContentInfoType[]> => {
    const response = await axiosApi.get(`/${questionId}/answers`)
    return response.data.data
  },

  GET_NEIGHBOR_ANSWERS: async ({
    questionId,
    userId,
  }: {
    questionId: number
    userId: number
  }): Promise<NeighborAnswerListInfoType[]> => {
    const response = await axiosApi.get(
      `/${questionId}/answers/${userId}/neighbors`,
    )
    return response.data.data
  },

  REPORT_ANSWER: async ({
    questionId,
    answerId,
  }: {
    questionId: number
    answerId: number
  }): Promise<DailyQuestionReportType> => {
    const response = await axiosApi.post(
      `/${questionId}/answers/${answerId}/report`,
    )
    return response.data.data
  },
}
