import { Route, Routes, useNavigate } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isBtnColorState, onboardingPageState } from '@libs/store/onboard'
import Onboarding from './Onboarding'

const OnboardingRouter = () => {
  const navigate = useNavigate()
  const [page, setPage] = useRecoilState(onboardingPageState)
  const setBtnColor = useSetRecoilState(isBtnColorState)
  const appLabel = page.agreement ? '' : '약관동의'

  const backHandler = () => {
    if (!page.agreement) {
      navigate(-1)
    } else if (page.agreement && !page.info.name) {
      setPage({
        ...page,
        agreement: false,
      })
    } else if (page.info.name && !page.info.userId) {
      setPage({
        ...page,
        info: {
          ...page.info,
          name: false,
        },
      })
    } else if (page.info.userId && !page.info.birth) {
      setPage({
        ...page,
        info: {
          ...page.info,
          userId: false,
        },
      })
    } else if (page.info.birth && !page.info.gender) {
      setPage({
        ...page,
        info: {
          ...page.info,
          birth: false,
        },
      })
    } else if (page.interestStart && !page.onboardStatus) {
      setPage({
        ...page,
        interestStart: false,
        info: {
          ...page.info,
          gender: false,
        },
      })
    } else if (page.onboardStatus && !page.favor) {
      setPage({
        ...page,
        onboardStatus: false,
      })
    } else if (page.favor) {
      setPage({
        ...page,
        favor: false,
      })
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppBarTemplate
            variant="backPushWithTitle"
            label={appLabel}
            hasNav={false}
            rightChildren="none"
            customHandler={backHandler}
          >
            <Onboarding />
          </AppBarTemplate>
        }
      />
    </Routes>
  )
}

export default OnboardingRouter
