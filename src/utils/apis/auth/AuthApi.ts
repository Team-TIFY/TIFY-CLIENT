import { axiosApi } from "../axios";
import { KakaoLoginResponse, KakaoRegisterResponse } from "@libs/types/AuthType";

export const AuthApi = {
    KAKAO_TOKEN: async(code: string) => {
        const response = await axiosApi.get(`/auth/oauth/kakao?code=${code}`);
        return response.data.data;
    },
    KAKAO_LINK: async() => {
        const response = await axiosApi.get('/auth/oauth/kakao/link')
        return response.data.data
    },
    KAKAO_LOGIN: async(idToken: string): Promise<KakaoLoginResponse> => {
        const response = await axiosApi.post(`/auth/oauth/kakao/login?id_token=${idToken}`)
        return response.data.data
    },
    KAKAO_REGISTER: async({idToken, payload} : {
            idToken: string;
            payload: KakaoRegisterResponse
        }): Promise<KakaoLoginResponse> => {
        const response = await axiosApi.post(
            `/auth/ouath/kakao/register?id_token=${idToken}`,
            payload)
        return response.data.data
    },
    KAKAO_VALID: async(idToken: string) => {
        const response = await axiosApi.get(`/auth/oauth/register/valid?idToken=${idToken}`)
        console.log(response)
        return response.data.data
    },
    REFRESH: async (refreshToken: string): Promise<KakaoLoginResponse> => {
        const response = await axiosApi.get(`/auth/token/refresh?refresh-token=${refreshToken}`)
        return response.data.data
    }
}