import { atom } from 'recoil'
import { DailyQuestionInfo } from '@apis/weekly/questionType'
import { FavorAnswerRequest } from '@models/apis/TasteType'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
const initialState: DailyQuestionInfo = {
  questionId: 0,
  content: '',
  category: 'FOOD',
  loadingData: '',
}

export const initialAnswerState: FavorAnswerRequest = {
  categoryName: '',
  favorAnswerDtos: [],
}

export const questionState = atom<DailyQuestionInfo>({
  key: 'dailyQuestion',
  default: initialState,
})

export const answerState = atom<FavorAnswerRequest>({
  key: 'favorAnswer',
  default: initialAnswerState,
})
