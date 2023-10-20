import { FriendsType } from '@libs/types/FriendsType'
import { axiosApi } from '../axios'
import { FriendRequestType } from './FriendsType'

export const FriendsApi = {
  GET_FRIENDS_LIST: async (): Promise<FriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors')
    return response.data.data.content
  },

  GET_BIRTHDAY_FRIENDS_LIST: async (): Promise<FriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors/birthday')
    return response.data.data.content
  },

  GET_FRIEND_REQUEST_LIST: async (): Promise<FriendRequestType[]> => {
    const response = await axiosApi.get(`/users/neighbors/applications`)
    return response.data.data.content
  },

  ACCEPT_FRIEND_REQUEST: async (neighborApplicationId: number) => {
    const response = await axiosApi.patch(
      `/users/neighbors/applications/${neighborApplicationId}/accept`,
    )
    return response.data.data
  },

  REJECT_FRIEND_REQUEST: async (neighborApplicationId: number) => {
    const response = await axiosApi.patch(
      `/users/neighbors/applications/${neighborApplicationId}/reject`,
    )
    return response.data.data
  },
}
