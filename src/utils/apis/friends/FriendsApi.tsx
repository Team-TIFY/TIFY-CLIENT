import { axiosApi } from '../axios'
import { InfiniteResponse } from '@libs/hooks'
import {
  FriendRequestType,
  FriendsType,
  SearchedFriendType,
} from './FriendsType'

export const FriendsApi = {
  GET_FRIENDS_LIST: async (): Promise<FriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors', {})
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

  SEARCH_FRIEND: async (userId: string): Promise<SearchedFriendType> => {
    const response = await axiosApi.get(`/users?userId=${userId}`)
    return response.data.data.content.length && response.data.data.content[0]
  },

  REQUEST_FRIEND: async (toUserId: number) => {
    const response = await axiosApi.post(`/users/${toUserId}/neighbors`)
    return response.data.data
  },
}
