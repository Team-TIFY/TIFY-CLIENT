import { UserInfo, UserInfoToken } from "@libs/types/UserTypes";
import { axiosApi } from "../axios";

export const UserApi = {
    GET_USER_INFO_TOKEN: async() : Promise<UserInfoToken> => {
        const response = await axiosApi.get('/users')
        return response.data.data
    },
    GET_USER_INFO: async (userId: number) : Promise<UserInfo> => {
        const response = await axiosApi.get(`/users/${userId}`)
        return response.data.data
    }
}