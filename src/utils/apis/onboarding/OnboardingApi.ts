import { axiosApi } from "../axios";


export const OnboardingApi = {
  GET_USERID_CHECK: async (id: string) => {
    const response = await axiosApi.get(`/users/id/check?id=${id}`)
        console.log(response);
        return response.data.data
    },
}