import { useState, useEffect } from 'react'
import { KakaoCodeResponse } from '@utils/apis/auth/AuthType'
import { useMutation } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { AuthApi } from '@utils/apis/auth/AuthApi'
import useAuthMutate from '@libs/hooks/useAuthMutate'
import Loading from '@components/atoms/Loading'

export const Redirect = () => {
  const [token, setToken] = useState<KakaoCodeResponse>({
    accessToken: '',
    idToken: '',
    refreshToken: '',
  })
  const query = useLocation().search
  const code = new URLSearchParams(query).get('code')

  const kakaoTokenMutation = useMutation(AuthApi.KAKAO_TOKEN, {
    onSuccess: (data: KakaoCodeResponse) => {
      setToken(data)
    },
  })

  const { ouathValidMutation } = useAuthMutate(token)

  useEffect(() => {
    if (code) {
      kakaoTokenMutation.mutate(code)
    }
  }, [code])

  useEffect(() => {
    if (token.idToken.length > 0) {
      ouathValidMutation.mutate(token.idToken)
    }
  }, [token])

  return (
    <>
      <Loading />
    </>
  )
}
