import { atom } from "recoil";
import { DailyQuestionInfo } from "@libs/types/questionType";
const initialState: DailyQuestionInfo = {
    questionId: 0,
    content: '',
    category: 'PERFUME',
    loadingData: ''
}

export const questionState = atom<DailyQuestionInfo>({
    key: 'dailyQuestion',
    default: initialState
})