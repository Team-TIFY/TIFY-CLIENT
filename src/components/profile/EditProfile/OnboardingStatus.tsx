import { useNavigate } from 'react-router-dom'
import { Padding } from '@components/layouts/Padding'
import { LongInput } from '@components/atoms/Input/LongInput'
import { Text } from '@components/atoms/Text'

export type EditOnboardingStatusType = {
  value: string
}

const OnboardingStatus = ({ value }: EditOnboardingStatusType) => {
  const navigate = useNavigate()

  const handleClickOnboardingInput = () => {
    navigate('onboardingStatus')
  }

  return (
    <>
      <Padding>
        <Text
          typo="Caption_12R"
          children="상태"
          color="gray_300"
          style={{ padding: '0 4px', marginBottom: '8px' }}
        />
      </Padding>
      <LongInput
        content="onBoardingStatus"
        value={value}
        placeholder="상태를 입력해주세요"
        onClick={handleClickOnboardingInput}
      />
    </>
  )
}

export default OnboardingStatus
