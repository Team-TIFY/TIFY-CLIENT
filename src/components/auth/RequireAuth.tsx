import { authState } from '@libs/store/auth'
import { useState } from 'react'
import { getCookie } from '@utils/cookies'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { axiosApi } from '@utils/apis/axios'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { UserApi } from '@utils/apis/user/UserApi'
import { IsOnboard } from '@libs/store/onboard'
import Loading from '@components/atoms/Loading'

const RequireAuth = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const [isOnboard, setIsOnboard] = useRecoilState(IsOnboard)
  const [status, setStatus] = useState<
    'loading' | 'succeed' | 'failed' | 'needOnboarding'
  >('loading')
  const accessToken = getCookie('accessToken')
  const fetchUserData = async () => {
    const data = await UserApi.GET_USER_INFO_TOKEN()
    if (data.onBoardingStatus) {
      setIsOnboard(true)
    }
    console.log(data)
    setAuth({
      isAuthenticated: true,
      callbackUrl: '/',
      accessToken: accessToken,
      userProfile: {
        id: data.id,
        userName: data.userName,
        userId: data.userId,
        imageUrl: data.imageUrl,
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
        // if (isOnboard === false) {
        //TODO: 추후 toast UI로 변경할 것
        //   alert('온보딩이 필요해요')
        //   setStatus('needOnboarding')
        // } else setStatus('succeed')
        setStatus('succeed')
      } catch (error) {
        setStatus('failed')
      }
    } else {
      setStatus('failed')
    }
  }, [accessToken])

  if (status === 'succeed') {
    return <Outlet />
  } else if (status === 'needOnboarding') {
    setTimeout(() => setStatus('succeed'), 500)
    return <Navigate replace to="/onboarding" />
  } else if (status === 'failed')
    // 둘 다 없으면 로그인 */
    return <Navigate replace to="/login" />
  else return <Loading />
}

export default RequireAuth
