import { axiosApi } from "../axios";

export const AuthApi = {
    KAKAO_TOKEN: async(code: string) => {
        const response = await axiosApi.get(`/auth/oauth/kakao?code=${code}`);
        return response.data.data;
    },
    KAKAO_LINK: async() => {
        const response = await axiosApi.get('/auth/oauth/kakao/link')
        console.log(response.data.data)
        return response.data.data
    },
}