import { axiosApi } from '@utils/apis/axios'
import {
  FavorAnswerRequest,
  FavorQuestionRequest,
  FavorQuestionResponse,
  FavorAnswerResponse,
} from '@utils/apis/favor/TasteType'

export const FavorApi = {
  GET_FAVOR_QUESTION: async (
    payload: FavorQuestionRequest,
  ): Promise<FavorQuestionResponse> => {
    const response = await axiosApi.get('/favor-questions', { params: payload })
    return response.data.data
  },

  POST_FAVOR_QUESTION: async (
    payload: FavorAnswerRequest,
  ): Promise<FavorAnswerResponse> => {
    const response = await axiosApi.post('/favor-questions/answers', payload)
    return response.data.data
  },
}
