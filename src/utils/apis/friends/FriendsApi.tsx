import { FriendsType } from '@libs/types/FriendsType';
import { axiosApi } from '../axios'

export const FriendsApi = {
  GET_FRIENDS_LIST: async (): Promise<FriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors')
    return response.data.data.content;
  },
}
