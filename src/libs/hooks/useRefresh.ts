import { useSetRecoilState } from 'recoil'
import { authState } from '@libs/store/auth'
import { useMutation } from '@tanstack/react-query'
import { axiosApi } from '@utils/apis/axios'
import { setCookie, removeCookie } from '@utils/cookies'
import { AuthApi } from '@utils/apis/auth/AuthApi'

const useRefresh = () => {
  const setAuth = useSetRecoilState(authState)
  const { mutate: refreshMutate, status } = useMutation(AuthApi.REFRESH, {
    onSuccess: (data) => {
      axiosApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.accessToken}`
      setAuth({
        userId: data.userId,
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
