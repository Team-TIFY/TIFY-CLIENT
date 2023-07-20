import { FlexBox } from "@components/layouts/FlexBox";
import { Text } from "../Text";
import styled from "@emotion/styled";
import { theme, media } from "@styles/theme";
import tify_logo from '../../../assets/icons/tify_logo.svg';
import three_dots from '../../../assets/icons/three_dots.svg';
import alert_icon from '../../../assets/icons/alert.svg';
import left_arrow from '../../../assets/icons/left_arrow.svg';
import { useNavigate } from "react-router-dom";

type AppBarType = 'logoWithAlarm' | 'backPush' | 'backPushWithMenu'

/**
 * @param variant AppBar의 type을 나타냄 'logoWithAlarm' | 'backPush' | 'backPushWithMenu'
 * @param label 'backPush' | 'backPushWithMenu' 사용 시 Appbar에 나타날 문구
 * @param beforeUrl (optional) BackArrow를 통하여 이동할 url (기본값은 뒤로가기)
 * @param onClickOption 두번째 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수
 */

interface AppBarProps {
    variant : AppBarType;
    label?: string;
    beforeUrl?: string;
    onClickOption?: () => void;
}

export const AppBar = ({
    variant='logoWithAlarm',
    label,
    beforeUrl,
    onClickOption
}: AppBarProps) => {
    const navigate = useNavigate();
    const onClickBackBar = () => {
        beforeUrl ? navigate(beforeUrl) : navigate(-1)
    }
    const onClickLogo = () => {
        navigate('/')
    }
    return(
    <Wrapper>
        {variant === 'logoWithAlarm' ? 
            <img style={{cursor:'pointer'}} src = {tify_logo} onClick={onClickLogo}/> : 
            <FirstElement>
                <img style={{cursor:'pointer'}} src ={left_arrow} onClick={onClickBackBar}/>
                <Text typo={'Subhead_16'} color={'gray_200'}>{label}</Text>
            </FirstElement>
        }
       
        {variant === 'logoWithAlarm' ? 
            <img style={{cursor:'pointer'}} src={alert_icon} onClick = {onClickOption}/> : 
            (variant === 'backPushWithMenu' ? 
                <img style={{cursor:'pointer'}} src ={three_dots} onClick ={onClickOption}/>
            : null)}
    </Wrapper>
)}

const Wrapper = styled(FlexBox)`
    height: 80px;
    width: 100%;
    justify-content: space-between;
    top: 0;
    padding: 40px 16px 16px 16px;
    background-color: ${theme.palette.background};
    position: fixed;
    z-index: 1;
    ${media.pc} {
        position: sticky;
    }
`

const FirstElement = styled(FlexBox)`
    justify-content: center;
    align-items: center;
    gap: 8px;
    & > h1:nth-of-type(1){
        padding-top: 3px;
    }
`

