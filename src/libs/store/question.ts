import { atom } from 'recoil'

import { DailyQuestionInfoType } from '@models/apis/QuestionType'
import { FavorAnswerRequestType } from '@models/apis/TasteType'

const initialState: DailyQuestionInfoType = {
  questionId: 0,
  content: '',
  category: 'FOOD',
  loadingData: '',
}

export const initialAnswerState: FavorAnswerRequestType = {
  categoryName: '',
  favorAnswerDtos: [],
}

export const questionState = atom<DailyQuestionInfoType>({
  key: 'dailyQuestion',
  default: initialState,
})

export const answerState = atom<FavorAnswerRequestType>({
  key: 'favorAnswer',
  default: initialAnswerState,
})
