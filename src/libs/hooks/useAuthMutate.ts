import {
  KakaoLoginResponse,
  KakaoCodeResponse,
} from '@utils/apis/auth/AuthType'
import { authState } from '@libs/store/auth'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '@utils/apis/auth/AuthApi'
import { axiosApi } from '@utils/apis/axios'
import { setCookie } from '@utils/cookies'
import { UserApi } from '@utils/apis/user/UserApi'

const useAuthMutate = ({ idToken }: KakaoCodeResponse) => {
  const [auth, setAuth] = useRecoilState(authState)
  const navigate = useNavigate()

  //회원가입 mutation
  const ouathKakaoRegisterMutation = useMutation(AuthApi.KAKAO_REGISTER, {
    onSuccess: (data: KakaoLoginResponse) => {
      onSuccessLogin(data)
      navigate(auth.callbackUrl)
    },
  })

  //로그인 mutation
  const ouathKakaoLoginMutation = useMutation(AuthApi.KAKAO_LOGIN, {
    onSuccess: (data: KakaoLoginResponse) => {
      onSuccessLogin(data)
      navigate(auth.callbackUrl)
    },
  })

  //회원가입 여부 검증
  const ouathValidMutation = useMutation(AuthApi.KAKAO_VALID, {
    onSuccess: (data: { canRegister: boolean }) => {
      //회원가입이 필요한 사람
      if (data.canRegister) {
        ouathKakaoRegisterMutation.mutate({
          idToken,
          payload: {
            email: 'abcd@example.com',
            profileImage: 'http://aaab',
            name: '김미미',
            phoneNumber: '010-1234-456',
          },
        })
        //회원가입 직후 온보딩페이지로 이동
        navigate('/onboarding')
      } else {
        //회원가입이 필요 없으면 그냥 로그인합니다.
        ouathKakaoLoginMutation.mutate(idToken)
      }
    },
  })

  const onSuccessLogin = async (loginData: KakaoLoginResponse) => {
    axiosApi.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${loginData.accessToken}`
    setCookie('refreshToken', loginData.refreshToken, {
      maxAge: 2592000,
      path: '/',
    })
    setCookie('accessToken', loginData.accessToken, {
      maxAge: 20000,
      path: '/',
    })
    const data = await UserApi.GET_USER_INFO(loginData.userId)
    setAuth({
      isAuthenticated: true,
      callbackUrl: '/',
      accessToken: loginData.accessToken,
      userProfile: {
        userId: data.userId,
        userName: data.userName,
        imageUrl: data.imageUrl,
        birth: data.birth,
        job: data.job,
        createdAt: data.createdAt,
        gender: data.gender,
        onBoardingStatus: data.onBoardingStatus,
      },
    })
  }
  return { ouathValidMutation }
}
export default useAuthMutate
