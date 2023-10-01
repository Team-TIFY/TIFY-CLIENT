import { atom } from 'recoil'
import { DailyQuestionInfo } from '@utils/apis/weekly/questionType'
import { FavorAnswerRequest } from '@utils/apis/favor/TasteType'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
const initialState: DailyQuestionInfo = {
  questionId: 0,
  content: '',
  category: 'PERFUME',
  loadingData: '',
}

const initialAnswerState: FavorAnswerRequest = {
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
  effects_UNSTABLE: [persistAtom],
})
