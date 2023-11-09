import { axiosApi } from '../axios'
import {
  FriendRequestType,
  FriendsType,
  SearchedFriendType,
} from './FriendsType'

export const FriendsApi = {
  GET_FRIENDS_LIST: async (): Promise<FriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors')
    return response.data.data
  },

  GET_BIRTHDAY_FRIENDS_LIST: async (): Promise<FriendsType[]> => {
    const response = await axiosApi.get('/users/neighbors/birthday')
    return response.data.data
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

  BLOCK_FRIEND: async (userId: number) => {
    const response = await axiosApi.post(`/users/${userId}/block`)
    return response.data.data
  },

  CANCEL_BLOCK_FRIEND: async (userId: number) => {
    const response = await axiosApi.delete(`/users/${userId}/block`)
    return response.data.data
  },

  REPORT_FRIEND: async (userId: number) => {
    const response = await axiosApi.post(`/users/report/${userId}`)
    return response.data.data
  },

  CUT_OFF_FRIEND: async (userId: number) => {
    const response = await axiosApi.delete(`/users/${userId}/neighbors/delete`)
    return response.data.data
  },
}
