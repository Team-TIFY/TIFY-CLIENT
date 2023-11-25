import styled from '@emotion/styled'
import { Text } from '@components/atoms/Text'
import giftBoxImage from '@assets/image/modalGiftBox.png'
import { FlexBox } from '@components/layouts/FlexBox'
import { RoundButton } from '@components/atoms/RoundButton'
import { theme } from '@styles/theme'
const FullModal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <img src={giftBoxImage} alt="선물상자" width={148} height={148} />
        <Text typo="SCD_Headline_24" color="white">
          답변을 모두 마쳤어요!
        </Text>
      </ModalContent>
      <StickyButton>
        <RoundButton variant="xlargeRound">다른 취향도 답하러 가기</RoundButton>
        <RoundButton variant="mediumRound" width={312}>
          프로필 바로가기
        </RoundButton>
      </StickyButton>
    </ModalContainer>
  )
}

export default FullModal

const ModalContainer = styled.div`
  z-index: 200;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${theme.palette.background};
`

const StickyButton = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`

const ModalContent = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  top: 25%;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`
