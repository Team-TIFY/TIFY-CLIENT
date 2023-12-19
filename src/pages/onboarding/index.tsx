import { Route, Routes, useNavigate } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  isBtnColorState,
  onboardingPageState,
  pageTempState,
} from '@libs/store/onboard'
import Onboarding from './Onboarding'
import { SignUp } from './details/SignUp'
import { useEffect } from 'react'

const OnboardingRouter = () => {
  const navigate = useNavigate()
  const [page, setPage] = useRecoilState(onboardingPageState)
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)
  const [pageTemp, setPageTemp] = useRecoilState(pageTempState)
  const appLabel = page.agreement ? '' : '약관동의'
  console.log(btnColor)
  console.log(page)
  const backHandler = () => {
    if (!page.agreement) {
      navigate(-1)
    } else if (page.agreement && !page.info.username) {
      setPage({
        ...page,
        agreement: false,
      })
    } else if (page.info.username && !page.info.id) {
      setPage({
        ...page,
        info: {
          ...page.info,
          username: false,
        },
      })
      setPageTemp('username')
      setBtnColor({ ...btnColor, username: true })
    } else if (page.info.id && !page.info.birth) {
      setPage({
        ...page,
        info: {
          ...page.info,
          id: false,
          birth: false,
        },
      })
      setPageTemp('id')
      setBtnColor({ ...btnColor, id: true })
    } else if (page.info.birth && !page.info.gender) {
      setPage({
        ...page,
        info: {
          ...page.info,
          birth: false,
        },
      })
      setPageTemp('birth')
      setBtnColor({ ...btnColor, birth: true })
    } else if (page.interestStart && !page.onboardStatus) {
      setPage({
        ...page,
        interestStart: false,
        info: {
          ...page.info,
          gender: false,
        },
      })
      setPageTemp('gender')
      setBtnColor({ ...btnColor, gender: true })
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
