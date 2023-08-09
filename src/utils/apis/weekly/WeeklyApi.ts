
import { DailyQuestionInfo } from "@libs/types/questionType";
import { axiosApi } from "../axios";
import { useRecoilState } from "recoil";
import { dateState } from "@libs/store/date";

export const WeeklyApi = {
    GET_QUESTIONS: async(date: string) : Promise<DailyQuestionInfo> => {
        console.log(date)
        const response = await axiosApi.get(`/questions?loadingDate=2023-08-09`)
        //TODO : 아래 주석으로 바꿔야 함.
        // const response = await axiosApi.get(`/questions?loadingDate=${date}`)
        return response.data.data.dailyQuestionInfo
    },
}