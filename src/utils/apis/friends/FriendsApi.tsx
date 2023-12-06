import { axiosApi } from '../axios'
import {
  FriendRequestType,
  FriendsType,
  NewFriendsType,
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

  REQUEST_FRIEND: async (toId: number) => {
    const response = await axiosApi.post(`/users/${toId}/neighbors`)
    return response.data.data
  },

  GET_PRESENT_RECOMMEND: async (
    smallCategory: string,
    priceOrder: string,
    priceFilter: string,
  ) => {
    const response = await axiosApi.get(
      `/products/products/small-category?smallCategoryList=${smallCategory}&priceOrder=${priceOrder}&priceFilter=${priceFilter}`,
    )
    return response.data
  },

  BLOCK_FRIEND: async (id: number) => {
    const response = await axiosApi.post(`/users/${id}/block`)
    return response.data.data
  },

  CANCEL_BLOCK_FRIEND: async (id: number) => {
    const response = await axiosApi.delete(`/users/${id}/block`)
    return response.data.data
  },

  REPORT_FRIEND: async (id: number) => {
    const response = await axiosApi.post(`/users/report/${id}`)
    return response.data.data
  },

  CUT_OFF_FRIEND: async (id: number) => {
    const response = await axiosApi.delete(`/users/${id}/neighbors/delete`)
    return response.data.data
  },

  GET_NEW_FRIENDS_LIST: async (): Promise<NewFriendsType[]> => {
    const response = await axiosApi.get(`/users/neighbors/isNew`)
    return response.data.data
  },

  REMOVE_NEW_FRIEND: async (id: number) => {
    const response = await axiosApi.patch(`/users/neighbors/${id}/isNew`)
    return response.data.data
  },
}
