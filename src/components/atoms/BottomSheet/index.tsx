import styled from '@emotion/styled'
import onBoardingGreeting from '@assets/image/onBoardingGreeting.png'
import { useState } from 'react'
import { Text } from '@components/atoms/Text'
const BottomSheet = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <BottomSheetContainer>
      <img src={onBoardingGreeting} alt="온보딩 환영" />
      <Text typo="SCD_Headline_24">TIFY 가입을 축하해요!</Text>
    </BottomSheetContainer>
  )
}

export default BottomSheet

const BottomSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
`
