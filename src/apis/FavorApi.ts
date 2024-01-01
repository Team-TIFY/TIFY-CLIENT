import { axiosApi } from '@apis/axios'

import {
  FavorQuestionRequestType,
  FavorQuestionResponseType,
  FavorAnswerRequestType,
  FavorAnswerResponseType,
} from '@models/apis/TasteType'

export const FavorApi = {
  GET_FAVOR_QUESTION: async (
    payload: FavorQuestionRequestType,
  ): Promise<FavorQuestionResponseType> => {
    const response = await axiosApi.get('/favor-questions', { params: payload })
    return response.data.data
  },

  POST_FAVOR_QUESTION: async (
    payload: FavorAnswerRequestType,
  ): Promise<FavorAnswerResponseType> => {
    const response = await axiosApi.post('/favor-questions/answers', payload)
    return response.data.data
  },
}
