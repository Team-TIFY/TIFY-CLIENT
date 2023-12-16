import { axiosApi } from './axios'

export const SettingApi = {
  POST_LOGOUT: async () => {
    const response = await axiosApi.post(`/auth/logout`)
    return response
  },
}

export const CustomerCenterApi = {
  POST_OPINION: async (
    opinionType: string,
    title: string,
    content: string,
    email: string,
    file?: string,
  ) => {
    let url = `/users/opinion/new?opinionType=${opinionType}&title=${title}&content=${content}&email=${email}`
    if (file) {
      url += `&file=${file}`
    }
    const response = await axiosApi.post(url)
    return response
  },
}
