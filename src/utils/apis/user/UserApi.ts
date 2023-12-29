import { TodayCategoryValueType } from '@models/components/atoms/TodayCategory'
import { axiosApi } from '@utils/apis/axios'
import {
  FilteredUserTag,
  UserNewTasteCategory,
  IsAnsweredCategory,
  SubCategoryType,
  UserInfo,
  UserInfoToken,
  PastTodayCategoryCountType,
  PastTodayAnswerType,
  EditUserProfileDataType,
  FavorBoxType,
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

  GET_USER_TAG: async (
    userId: number,
    smallCategory: SubCategoryType[],
  ): Promise<FilteredUserTag[]> => {
    const response = await axiosApi.get(
      `/users/${userId}/favors?smallCategory=${smallCategory}`,
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

  GET_PAST_TODAY_CATEGORY_COUNT: async (
    id: number,
  ): Promise<PastTodayCategoryCountType[]> => {
    const response = await axiosApi.get(
      `/users/daily-answer/${id}/count/all-category`,
    )
    return response.data.data
  },

  GET_PAST_TODAY_ANSWER: async (
    id: number,
    category: TodayCategoryValueType,
  ): Promise<PastTodayAnswerType[][]> => {
    const reponse = await axiosApi.get(
      `/users/daily-answer/${id}?dailyQuestionCategory=${category}`,
    )
    return reponse.data.data
  },

  EDIT_USER_PROFILE: async (updatedUserData: EditUserProfileDataType) => {
    const response = await axiosApi.patch(`/users/profile`, updatedUserData)
    return response.data.data
  },

  GET_USER_FAVOR_BOX: async (id: number): Promise<FavorBoxType[]> => {
    const response = await axiosApi.get(`/users/${id}/tags`)
    return response.data.data
  },
  EDIT_FAVOR_BOX: async ({
    userId,
    favorList,
  }: {
    userId: number
    favorList: string[]
  }) => {
    const response = await axiosApi.patch(`/users/${userId}/tags`, {
      userFavorDtoList: [...favorList],
    })
    return response.data.data
  },
}
