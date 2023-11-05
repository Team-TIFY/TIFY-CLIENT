import styled from '@emotion/styled'
import { onboardingPageState } from '@libs/store/onboard'
import { useRecoilValue } from 'recoil'
import { Agreement } from './details/Agreement'
import { HalfSuccess } from './details/HalfSuccess'
import { DetailInfo } from './details/selectInfo/DetailInfo'
import { SelectFavor } from './details/selectInfo/SelectFavor'
import { SignUp } from './details/SignUp'

const Onboarding = () => {
  const onboardPage = useRecoilValue(onboardingPageState)

  return (
    <Wrapper>
      {onboardPage.favor ? (
        <SelectFavor />
      ) : onboardPage.onboardStatus ? (
        <DetailInfo isEdit={false} />
      ) : onboardPage.interestStart ? (
        <HalfSuccess />
      ) : onboardPage.agreement ? (
        <SignUp />
      ) : (
        <Agreement />
      )}
    </Wrapper>
  )
}

export default Onboarding

const Wrapper = styled.div`
  color: #fff;
`
