import { authState } from '@libs/store/auth'
import { useState } from 'react'
import { getCookie } from '@utils/cookies'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { axiosApi } from '@utils/apis/axios'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { UserApi } from '@utils/apis/user/UserApi'

const RequireAuth = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const [status, setStatus] = useState<'loading' | 'succeed' | 'failed'>(
    'loading',
  )
  const accessToken = getCookie('accessToken')
  const fetchUserData = async () => {
    const data = await UserApi.GET_USER_INFO_TOKEN()
    setAuth({
      isAuthenticated: true,
      callbackUrl: '/',
      accessToken: accessToken,
      userId: data.userId,
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

  if (status === 'succeed') {
    return <Outlet />
  } else if (status === 'failed')
    // 둘 다 없으면 로그인 */
    return <Navigate replace to="/login" />
  else return <></>
}

export default RequireAuth
