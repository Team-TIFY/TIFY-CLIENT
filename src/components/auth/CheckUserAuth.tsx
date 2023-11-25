import { getCookie } from '@utils/cookies'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useRefresh from '@libs/hooks/useRefresh'

export const CheckUserAuth = () => {
  const refreshToken = getCookie('refreshToken')
  const { refreshMutate, status } = useRefresh()
  useEffect(() => {
    refreshToken ? refreshMutate(refreshToken) : null
  }, [])
  if (status === 'success') {
    return <Navigate replace to="/" />
  } else return <Outlet />
}
