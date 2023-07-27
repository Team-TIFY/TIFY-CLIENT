import { KakaoLoginResponse, KakaoCodeResponse } from "@libs/types/AuthType";
import { authState } from "@libs/store/auth";
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthApi } from "@utils/apis/auth/AuthApi";
import { axiosApi } from "@utils/apis/axios";
import { setCookie } from "@utils/cookies";

const useAuthMutate = ({idToken}: KakaoCodeResponse) => {
    const [auth, setAuth] = useRecoilState(authState);
    const navigate = useNavigate();

    //회원가입 mutation
    const ouathKakaoRegisterMutation = useMutation(AuthApi.KAKAO_REGISTER, {
        onSuccess: (data: KakaoLoginResponse) => {
            onSuccessLogin(data);
            navigate(auth.callbackUrl)
        }
    })

    //로그인 mutation
    const ouathKakaoLoginMutation = useMutation(AuthApi.KAKAO_LOGIN, {
        onSuccess: (data: KakaoLoginResponse) => {
            onSuccessLogin(data);
            navigate(auth.callbackUrl)
        }
    })

    //회원가입 여부 검증 
    const ouathValidMutation = useMutation(AuthApi.KAKAO_VALID, {
        onSuccess: (data: { canRegister : boolean }) => {
            //그냥 로그인 하셈 
            if (data.canRegister){
                ouathKakaoRegisterMutation.mutate({idToken, payload:{
                    email:"abc:@example.com",
                    profileImage:"http://aaa",
                    name:"김예시",
                    phoneNumber:"010-123-456"
                }})
            } else {
                ouathKakaoLoginMutation.mutate(idToken)
            }
        }
    })

    const onSuccessLogin = (loginData: KakaoLoginResponse) => {
        axiosApi.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${loginData.accessToken}`
        setCookie('refreshToken', loginData.refreshToken, {
            maxAge: 2592000,
            path: '/'
        })
        setCookie('accessToken', loginData.accessToken, {
            maxAge: 20000,
            path: '/'
        })
        setAuth({
            isAuthenticated: true,
            callbackUrl: '/',
            accessToken: loginData.accessToken,
            userId: loginData.userId
        })
    }
    return { ouathValidMutation }
}
export default useAuthMutate