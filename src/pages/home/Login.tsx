import { AuthApi } from '@utils/apis/auth/AuthApi'
import { RoundButton } from '@components/atoms/RoundButton'
import Svg from '@components/atoms/Svg'
import TifyLogo from '@assets/icons/TifyLogo'
import styled from '@emotion/styled'
import { Text } from '@components/atoms/Text'
const Login = () => {
  const kakaoLogin = async () => {
    const data = await AuthApi.KAKAO_LINK()
    window.location.href = data.link
  }
  const appleLogin = async () => {
    const data = await AuthApi.APPLE_LINK()
    window.location.href = data.link
  }
  return (
    <div>
      <MainIconContainer>
        <Text typo="Subhead_16" color="white">
          취향을 찾다, 마음이 닿다
        </Text>
        <Svg width={160} children={<TifyLogo />} />
      </MainIconContainer>
      <ButtonContainer>
        <RoundButton
          variant="kakao"
          onClick={kakaoLogin}
          fullWidth={true}
          style={{ height: '49px' }}
        >
          카카오로 로그인하기
        </RoundButton>
        <RoundButton
          variant="kakao"
          fullWidth={true}
          style={{ height: '49px', backgroundColor: 'white' }}
          onClick={appleLogin}
        >
          Apple로 로그인
        </RoundButton>
      </ButtonContainer>
    </div>
  )
}

export default Login

const MainIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin: auto 0;
  padding: 240px 0px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  padding: 20px;
  gap: 12px;
  width: 100%;
`
