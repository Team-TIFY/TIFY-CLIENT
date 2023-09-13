import { AuthApi } from '@utils/apis/auth/AuthApi'
import { RoundButton } from '@components/atoms/RoundButton'

const Login = () => {
  const kakaoLogin = async () => {
    const data = await AuthApi.KAKAO_LINK()
    window.location.href = data.link
  }
  return (
    <div>
      <RoundButton variant="kakao" onClick={kakaoLogin}>
        카카오로 로그인하기
      </RoundButton>
    </div>
  )
}

export default Login
