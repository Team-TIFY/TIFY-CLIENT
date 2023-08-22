
import { DailyQuestionInfo } from "@libs/types/questionType";
import { axiosApi } from "../axios";
export const WeeklyApi = {
    GET_QUESTIONS: async(date: string) : Promise<DailyQuestionInfo> => {
        const response = await axiosApi.get(`/daily-questions?loadingDate=${date}`)
        return response.data.data.dailyQuestionInfo
    },
}