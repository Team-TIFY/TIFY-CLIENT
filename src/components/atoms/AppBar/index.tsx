import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '../Text'
import styled from '@emotion/styled'
import { theme, media } from '@styles/theme'
import { useNavigate } from 'react-router-dom'
import Svg from '../Svg'
import TifyLogo from '@assets/icons/TifyLogo'
import LeftArrow from '@assets/icons/LeftArrow'
import Alert from '@assets/icons/Alert'
import ThreeDots from '@assets/icons/ThreeDots'

export type AppBarType = 'logoWithAlarm' | 'backPush' | 'backPushWithMenu'

/**
 * @param variant AppBar의 type을 나타냄 'logoWithAlarm' | 'backPush' | 'backPushWithMenu'
 * @param label 'backPush' | 'backPushWithMenu' 사용 시 Appbar에 나타날 문구
 * @param beforeUrl (optional) BackArrow를 통하여 이동할 url (기본값은 뒤로가기)
 * @param onClickOption 두번째 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수
 */

interface AppBarProps {
  variant: AppBarType
  label?: string
  beforeUrl?: string
  onClickOption?: () => void
}

export const AppBar = ({
  variant = 'logoWithAlarm',
  label,
  beforeUrl,
  onClickOption,
}: AppBarProps) => {
  const navigate = useNavigate()

  const onClickBackBar = () => {
    beforeUrl ? navigate(beforeUrl) : navigate(-1)
  }

  const onClickLogo = () => {
    navigate('/')
  }

  return (
    <Wrapper>
      {variant === 'logoWithAlarm' ? (
        <Svg children={<TifyLogo />} onClick={onClickLogo} />
      ) : (
        <FirstElement>
          <Svg children={<LeftArrow />} onClick={onClickBackBar} />
          <Text typo="Subhead_16" color="gray_200">
            {label}
          </Text>
        </FirstElement>
      )}

      {variant === 'logoWithAlarm' ? (
        <Svg children={<Alert />} onClick={onClickOption} />
      ) : variant === 'backPushWithMenu' ? (
        <Svg children={<ThreeDots />} onClick={onClickOption} />
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled(FlexBox)`
  height: 80px;
  width: 100%;
  position: sticky;
  justify-content: space-between;
  top: 0;
  padding: 40px 16px 16px 16px;
  background-color: ${theme.palette.background};
  z-index: 100;
`

const FirstElement = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  gap: 8px;
  & > h1:nth-of-type(1) {
    padding-top: 3px;
  }
`
