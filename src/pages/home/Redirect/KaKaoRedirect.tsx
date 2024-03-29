import { useState, useEffect } from 'react'
import { OauthCodeResponseType } from '@models/apis/AuthType'
import { useMutation } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { AuthApi } from '@apis/AuthApi'
import useAuthMutate from '@libs/hooks/mutations/useAuthMutate'
import Loading from '@components/atoms/Loading'

export const KaKaoRedirect = () => {
  const [token, setToken] = useState<OauthCodeResponseType>({
    accessToken: '',
    idToken: '',
    refreshToken: '',
  })
  const query = useLocation().search
  const code = new URLSearchParams(query).get('code')

  const kakaoTokenMutation = useMutation(AuthApi.KAKAO_TOKEN, {
    onSuccess: (data: OauthCodeResponseType) => {
      setToken(data)
    },
  })

  const { ouathKakaoValidMutation } = useAuthMutate(token)

  useEffect(() => {
    if (code) {
      kakaoTokenMutation.mutate(code)
    }
  }, [code])

  useEffect(() => {
    if (token.idToken.length > 0) {
      ouathKakaoValidMutation.mutate(token.idToken)
    }
  }, [token])

  return (
    <>
      <Loading />
    </>
  )
}
