import { CountDailyQuestion, DailyAnswerList, DailyQuestionInfo } from "@libs/types/questionType";
import { axiosApi } from "../axios";
export const WeeklyApi = {
    GET_QUESTIONS: async(date: string) : Promise<DailyQuestionInfo> => {
        const response = await axiosApi.get(`/daily-questions?loadingDate=${date}`)
        return response.data.data.dailyQuestionInfo
    },
    ANSWER_QUESTION: async({questionId, answer}: {
        questionId: number,
        answer: string
    }) => {
        const response = await axiosApi.post(`/daily-questions/${questionId}/answers`, {
            answer: answer
        })
        return response.data
    },
    ALREADY_ANSWERED: async(questionId: number): Promise<boolean> => {
        const response = await axiosApi.get(`/daily-questions/${questionId}/user/answers/exists`)
        return response.data.data
    },
    COUNT_ANSWER: async(questionId: number): Promise<CountDailyQuestion> => {
        const response = await axiosApi.get(`/${questionId}/answers/counts`)
        return response.data.data
    },
    GET_ANSWERS: async(questionId: number): Promise<DailyAnswerList> => {
        const response = await axiosApi.get(`/${questionId}/answers`)
        return response.data.data
    }

}