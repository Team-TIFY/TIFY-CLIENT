import { BirthdayFriendsType, FriendsType } from '@libs/types/FriendsType'
import { axiosApi } from '../axios'

export const FriendsApi = {
  GET_FRIENDS_LIST: async (): Promise<FriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors')
    return response.data.data.content
  },
  GET_BIRTHDAY_FRIENDS_LIST: async (): Promise<BirthdayFriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors/birthday')
    return response.data.data.content
  },
}
