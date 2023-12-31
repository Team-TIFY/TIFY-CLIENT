import { useState, useEffect } from 'react'
import { OauthCodeResponse } from '@apis/auth/AuthType'
import { useMutation } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { AuthApi } from '@apis/auth/AuthApi'
import useAuthMutate from '@libs/hooks/useAuthMutate'
import Loading from '@components/atoms/Loading'

export const AppleRedirect = () => {
  const [token, setToken] = useState<OauthCodeResponse>({
    accessToken: '',
    idToken: '',
    refreshToken: '',
  })
  const query = useLocation().search
  const code = new URLSearchParams(query).get('code')

  const appleTokenMutation = useMutation(AuthApi.APPLE_TOKEN, {
    onSuccess: (data: OauthCodeResponse) => {
      setToken(data)
    },
  })

  const { oauthAppleValidMutation } = useAuthMutate(token)

  useEffect(() => {
    if (code) {
      appleTokenMutation.mutate(code)
    }
  }, [code])

  useEffect(() => {
    if (token.idToken.length > 0) {
      oauthAppleValidMutation.mutate(token.idToken)
    }
  }, [token])

  return (
    <>
      <Loading />
    </>
  )
}
