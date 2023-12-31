/* eslint-disable react/jsx-key */
import { Suspense } from 'react'
import { Routes, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useQuery } from '@tanstack/react-query'

import { authState } from '@libs/store/auth'
import { answerState } from '@libs/store/question'
import { UserApi } from '@apis/user/UserApi'
import { useProfileRoute } from '@libs/hooks/useProfileRoute'
import AppBarRouteTemplate from '@components/layouts/AppBarRouteTemplate'
import Loading from '@components/atoms/Loading'

const ProfileRouter = () => {
  const auth = useRecoilValue(authState)
  const [step, setStepAnswer] = useRecoilState(answerState)

  const navigate = useNavigate()
  const location = useLocation()

  const userId = parseInt(location.pathname.slice(9))

  const handleBack = () => {
    if (step.favorAnswerDtos.length > 0) {
      const tempList = [...step.favorAnswerDtos]
      const newFavorAnswerDtos = tempList.slice(0, tempList.length - 1)

      setStepAnswer({
        categoryName: step.categoryName,
        favorAnswerDtos: [...newFavorAnswerDtos],
      })
      navigate(-1)
    } else if (localStorage.getItem('isOnboardingFavor') === 'true') {
      localStorage.removeItem('isOnboardingFavor')
      navigate('/onboarding')
    } else {
      navigate(-1)
    }
  }

  const { data: userData } = useQuery(
    ['userProfile', userId],
    () => UserApi.GET_USER_INFO(userId),
    {
      enabled: !isNaN(userId) && userId !== auth.userProfile.id,
    },
  )

  const profileRoutes = useProfileRoute(auth, userId, userData!, handleBack)

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {profileRoutes.map((profileRoute) => (
          <AppBarRouteTemplate
            path={profileRoute.path}
            label={profileRoute.label}
            hasNav={profileRoute.hasNav}
            rightChildren={profileRoute.rightChildren}
            rightChildrenIcon={profileRoute.rightChildrenIcon}
            isLabelAlignCenter={profileRoute.isLabelAlignCenter}
            variant={profileRoute.variant}
            beforeUrl={profileRoute.beforeUrl!}
            customHandler={profileRoute.customHandler}
            element={profileRoute.element}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default ProfileRouter
