import { axiosApi } from './axios'

import { OnboardRequestType } from '@libs/store/onboard'

export const OnboardingApi = {
  GET_USERID_CHECK: async (id: string) => {
    const response = await axiosApi.get(`/users/id/check?id=${id}`)
    return response.data.data
  },

  GET_ONBOARD_STATUS: async (keyword: string) => {
    const response = await axiosApi.get(
      `/users/onBoardingStatus?keyword=${keyword}`,
    )
    return response.data.data.userOnBoardingStatusInfos
  },

  PUT_ONBOARD_STATUS: async ({
    userId,
    data,
  }: {
    userId: number
    data: OnboardRequestType
  }) => {
    const response = await axiosApi.put(`/users/${userId}`, data)
    return response.data
  },
}
