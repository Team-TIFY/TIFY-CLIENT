import { axiosApi } from '@utils/apis/axios'
import {
  FilteredUserTag,
  UserNewTasteCategory,
  IsAnsweredCategory,
  SubCategoryType,
  UserInfo,
  UserInfoToken,
  UserTag,
} from '@utils/apis/user/UserType'

export const UserApi = {
  GET_USER_INFO_TOKEN: async (): Promise<UserInfoToken> => {
    const response = await axiosApi.get('/users/me')
    return response.data.data
  },

  GET_USER_INFO: async (userId: number): Promise<UserInfo> => {
    const response = await axiosApi.get(`/users/${userId}`)
    return response.data.data
  },

  GET_USER_TAG: async (userId: number): Promise<UserTag[]> => {
    const response = await axiosApi.get(`/users/${userId}/tags`)
    return response.data.data
  },

  GET_FILTERED_USER_TAG: async (
    smallCategory: SubCategoryType,
  ): Promise<FilteredUserTag[]> => {
    const response = await axiosApi.get(
      `/favor-questions/answers?smallCategory=${smallCategory}`,
    )
    return response.data.data
  },

  GET_ISANSWERED_QUESTION: async (): Promise<UserNewTasteCategory[]> => {
    const response = await axiosApi.get(`/favor-questions/isAnswered`)
    return response.data.data
  },

  UPDATE_FRIEND_PROFILE_VIEW_TIME: async (neighborId: number) => {
    const response = await axiosApi.patch(`/users/neighbors/${neighborId}`)
  },

  GET_SMALL_CATEGORY_ISANSWERED_QUESTION: async (
    category: SubCategoryType,
  ): Promise<IsAnsweredCategory[]> => {
    const response = await axiosApi.get(
      `favor-questions/isAnswered/detail-category?smallCategory=${category}`,
    )
    return response.data.data
  },
}
