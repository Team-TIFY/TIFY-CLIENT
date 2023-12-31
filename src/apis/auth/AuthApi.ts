import { axiosApi } from '../axios'
import { OauthLoginResponse } from '@apis/auth/AuthType'

export const AuthApi = {
  KAKAO_TOKEN: async (code: string) => {
    const response = await axiosApi.get(`/auth/oauth/kakao?code=${code}`)
    return response.data.data
  },
  APPLE_TOKEN: async (code: string) => {
    const response = await axiosApi.get(`/auth/oauth/apple?code=${code}`)
    return response.data.data
  },
  KAKAO_LINK: async () => {
    const response = await axiosApi.get('/auth/oauth/kakao/link')
    return response.data.data
  },

  APPLE_LINK: async () => {
    const response = await axiosApi.get('/auth/oauth/apple/link')
    return response.data.data
  },

  KAKAO_LOGIN: async (idToken: string): Promise<OauthLoginResponse> => {
    const response = await axiosApi.post(
      `/auth/oauth/kakao/login?idToken=${idToken}`,
    )
    return response.data.data
  },

  APPLE_LOGIN: async (idToken: string): Promise<OauthLoginResponse> => {
    const response = await axiosApi.post(
      `auth/oauth/apple/login?idToken=${idToken}`,
    )
    return response.data.data
  },
  KAKAO_REGISTER: async (idToken: string): Promise<OauthLoginResponse> => {
    const response = await axiosApi.post(
      `/auth/oauth/kakao/register?id_token=${idToken}`,
    )
    return response.data.data
  },

  KAKAO_VALID: async (idToken: string) => {
    const response = await axiosApi.get(
      `/auth/oauth/register/valid/kakao?idToken=${idToken}`,
    )
    return response.data.data
  },

  APPLE_REGISTER: async ({
    idToken,
    refreshToken,
  }: {
    idToken: string
    refreshToken: string
  }) => {
    const response = await axiosApi.post(
      `/auth/oauth/apple/register?id_token=${idToken}&refresh_token=${refreshToken}`,
    )
    return response.data.data
  },

  APPLE_VALID: async (idToken: string) => {
    const response = await axiosApi.get(
      `/auth/oauth/register/valid/apple?idToken=${idToken}`,
    )
    return response.data.data
  },

  REFRESH: async (refreshToken: string): Promise<OauthLoginResponse> => {
    axiosApi.interceptors.request.use(function (config) {
      config.headers.set('refresh-token', refreshToken)
      return config
    })
    const response = await axiosApi.get(`/auth/token/refresh`)
    return response.data.data
  },
}
