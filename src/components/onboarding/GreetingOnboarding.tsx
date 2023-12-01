import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import onBoardingGreeting from '@assets/image/onBoardingGreeting.png'

const GreetingOnboarding = () => {
  return (
    <FlexBox direction="column">
      <img
        src={onBoardingGreeting}
        alt="온보딩 환영"
        width={148}
        height={148}
      />
      <Text typo="SCD_Headline_24" color="white" style={{ marginTop: '20px' }}>
        TIFY 가입을 축하해요!
      </Text>
    </FlexBox>
  )
}

export default GreetingOnboarding
