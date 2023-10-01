import { axiosApi } from '../axios'
import {
  KakaoLoginResponse,
  KakaoRegisterResponse,
} from '@utils/apis/auth/AuthType'

export const AuthApi = {
  KAKAO_TOKEN: async (code: string) => {
    const response = await axiosApi.get(`/auth/oauth/kakao?code=${code}`)
    return response.data.data
  },
  KAKAO_LINK: async () => {
    const response = await axiosApi.get('/auth/oauth/kakao/link')
    return response.data.data
  },
  KAKAO_LOGIN: async (idToken: string): Promise<KakaoLoginResponse> => {
    const response = await axiosApi.post(
      `/auth/oauth/kakao/login?idToken=${idToken}`,
    )
    return response.data.data
  },
  KAKAO_REGISTER: async ({
    idToken,
    payload,
  }: {
    idToken: string
    payload: KakaoRegisterResponse
  }): Promise<KakaoLoginResponse> => {
    const response = await axiosApi.post(
      `/auth/oauth/kakao/register?id_token=${idToken}`,
      payload,
    )
    return response.data.data
  },
  KAKAO_VALID: async (idToken: string) => {
    const response = await axiosApi.get(
      `/auth/oauth/register/valid?idToken=${idToken}`,
    )
    return response.data.data
  },
  REFRESH: async (refreshToken: string): Promise<KakaoLoginResponse> => {
    axiosApi.interceptors.request.use(function (config) {
      config.headers.set('refresh-token', refreshToken)
      return config
    })
    const response = await axiosApi.get(`/auth/token/refresh`)
    return response.data.data
  },
}
