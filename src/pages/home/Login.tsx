import { AuthApi } from "@utils/apis/auth/AuthApi";
import { Button } from "@components/atoms/Button";

const Login = () => {
    const kakaoLogin = async () => {
        const data = await AuthApi.KAKAO_LINK();
        window.location.href = data.string
    }
    return (
        <div>
            <Button variant="kakao" onClick={kakaoLogin}>카카오로 로그인하기</Button>
        </div>
    );
};

export default Login;
