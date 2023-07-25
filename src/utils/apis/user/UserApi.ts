import { UserInfo } from "../../../libs/types/UserTypes"
import { axiosApi } from "../axios"
import { useRecoilState } from "recoil";
import { authState } from "../../../libs/store/auth"


export const UserApi = {
    GET_USER_INFO: async (userId: number) : Promise<UserInfo> => {
        const response = await axiosApi.get(`/users/${userId}`)
        return response.data.data
    }
}