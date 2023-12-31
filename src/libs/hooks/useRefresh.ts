import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'

import { axiosApi } from '@apis/axios'
import { AuthApi } from '@apis/auth/AuthApi'
import { authState } from '@libs/store/auth'
import { setCookie, removeCookie } from '@utils/cookies'

const useRefresh = () => {
  const [auth, setAuth] = useRecoilState(authState)

  const { mutate: refreshMutate, status } = useMutation(AuthApi.REFRESH, {
    onSuccess: (data) => {
      axiosApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.accessToken}`
      setAuth({
        userProfile: { ...auth.userProfile },
        loginType: 'KAKAO',
        accessToken: data.accessToken,
        isAuthenticated: true,
        callbackUrl: '/',
      })
      if (import.meta.env.DEV) {
        removeCookie('refreshToken')
        removeCookie('accessToken')
        setCookie('refreshToken', data.refreshToken, {
          maxAge: 96000000,
          path: '/',
        })
        setCookie('accessToken', data.accessToken, {
          maxAge: 20000,
          path: '/',
        })
      }
    },
    retry: false,
  })

  return { refreshMutate, status }
}

export default useRefresh
