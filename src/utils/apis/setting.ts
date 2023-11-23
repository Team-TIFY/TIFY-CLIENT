import { axiosApi } from './axios'

export const SettingApi = {
  POST_LOGOUT: async () => {
    const response = await axiosApi.post(`/auth/logout`)
    return response
  },
}
