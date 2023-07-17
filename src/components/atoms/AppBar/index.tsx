import { FlexBox } from "@components/layouts/FlexBox";
import { Text } from "../Text";
import styled from "@emotion/styled";
import { theme, media } from "@styles/theme";
import tify_logo from '../../../assets/icons/tify_logo.svg';
import three_dots from '../../../assets/icons/three_dots.svg';
import alert_icon from '../../../assets/icons/alert.svg';
import left_arrow from '../../../assets/icons/left_arrow.svg';

type AppBarType = 'logoWithAlarm' | 'backPush' | 'backPushWithMenu'

interface AppBarProps {
    variant : AppBarType;
    label?: string;
    firstElementHandler?: () => void;
    alarmHandler?: () => void;
    menuHandler?: () => void;
    actionBtnHandler?: () => void;
}

export const AppBar = ({
    variant='logoWithAlarm',
    label,
    firstElementHandler,
    ...props
}: AppBarProps) => {
    return(
    <Wrapper>
        {variant === 'logoWithAlarm' ? 
            <img src = {tify_logo}/> : 
            <FirstElement>
                <img src ={left_arrow}/>
                <Text typo={'SCD_Headline_24'}> {label}</Text>
            </FirstElement>
        }
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
    cursor: pointer;
`

const ActionElement = styled.div`
`