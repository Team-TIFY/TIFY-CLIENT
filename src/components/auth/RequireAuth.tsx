import { authState } from '@libs/store/auth'
import { useState } from 'react'
import { getCookie } from '@utils/cookies'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { axiosApi } from '@apis/axios'
import { Outlet, Navigate } from 'react-router-dom'
import { UserApi } from '@apis/UserApi'
import { IsOnboard } from '@libs/store/onboard'
import Loading from '@components/atoms/Loading'
import useSnackBar from '@libs/hooks/useSnackBar'
import { useLocation } from 'react-router-dom'

const RequireAuth = () => {
  const location = useLocation()
  const [auth, setAuth] = useRecoilState(authState)
  const [isOnboard, setIsOnboard] = useRecoilState(IsOnboard)
  const { setSnackBar } = useSnackBar()
  const [status, setStatus] = useState<
    'loading' | 'succeed' | 'failed' | 'needOnboarding'
  >('loading')
  const accessToken = getCookie('accessToken')
  const fetchUserData = async () => {
    const data = await UserApi.GET_USER_INFO_TOKEN()
    if (!data.gender) {
      setIsOnboard(false)
    }
    setAuth({
      isAuthenticated: true,
      callbackUrl: '/',
      loginType: auth.loginType,
      accessToken: accessToken,
      userProfile: {
        id: data.id,
        userName: data.userName,
        userId: data.userId,
        imageUrl: data.imageUrl,
        email: data.email,
        birth: data.birth,
        job: data.job,
        createdAt: data.createdAt,
        gender: data.gender,
        onBoardingStatus: data.onBoardingStatus,
      },
    })
  }
  useEffect(() => {
    if (accessToken) {
      axiosApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`
      try {
        fetchUserData()
        setStatus('succeed')
      } catch (error) {
        setStatus('failed')
      }
    } else {
      setStatus('failed')
    }
  }, [accessToken])

  useEffect(() => {
    if (accessToken) {
      if (isOnboard === false) {
        setStatus('needOnboarding')
        setSnackBar({ comment: '온보딩이 필요해요', type: 'error' })
      } else setStatus('succeed')
    } else {
      setStatus('failed')
    }
  }, [isOnboard, accessToken])

  if (status === 'succeed') {
    return <Outlet />
  } else if (status === 'needOnboarding') {
    setTimeout(() => setStatus('succeed'), 100)
    return <Navigate replace to="/onboarding" />
  } else if (status === 'failed') {
    if (!location.pathname.includes('login')) {
      setSnackBar({ comment: '로그인이 필요해요', type: 'error' })
    }
    return <Navigate replace to="/login" />
  } else return <Loading />
}

export default RequireAuth
