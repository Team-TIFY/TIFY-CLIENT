import styled from '@emotion/styled'
import { Text } from '@components/atoms/Text'
import { RoundButton } from '@components/atoms/RoundButton'
import NavigationToday from '@assets/icons/NavigationToday'
import { useNavigate } from 'react-router-dom'
import { theme } from '@styles/theme'
import { Spacing } from '@components/atoms/Spacing'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <NotFoundContainer>
      <ImgContainer>
        <img src="/images/giftBox.png" />
      </ImgContainer>
      <Text typo="Subhead_16" color="gray_200">
        올바르지 않은 경로입니다.
      </Text>
      <Spacing height={64} />
      <RoundButton
        variant="smallRound"
        onClick={() => navigate('/')}
        width={182}
        style={{
          backgroundColor: `${theme.palette.gray_700}`,
          height: '36px',
          cursor: 'pointer',
        }}
      >
        <NavigationToday /> TIFY 홈으로 가기
      </RoundButton>
    </NotFoundContainer>
  )
}

export default NotFound

const NotFoundContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ImgContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  height: 181px;
  img {
    height: 100%;
  }
`
