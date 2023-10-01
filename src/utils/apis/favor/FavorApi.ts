import { axiosApi } from '@utils/apis/axios'
import {
  FavorQuestionRequest,
  FavorQuestionResponse,
} from '@utils/apis/favor/TasteType'

export const FavorApi = {
  GET_FAVOR_QUESTION: async (
    payload: FavorQuestionRequest,
  ): Promise<FavorQuestionResponse> => {
    const response = await axiosApi.get('/favor-questions', { params: payload })
    return response.data.data
  },
}
