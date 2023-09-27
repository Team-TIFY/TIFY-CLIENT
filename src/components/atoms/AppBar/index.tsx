import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '../Text'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useNavigate } from 'react-router-dom'
import Svg from '../Svg'
import TifyLogo from '@assets/icons/TifyLogo'
import LeftArrow from '@assets/icons/LeftArrow'
import Alert from '@assets/icons/Alert'
import ThreeDots from '@assets/icons/ThreeDots'

export type AppBarType = 'backPushWithTitle' | 'title' | 'backPush' | 'logo'

export type RightChildrenVariant = 'alarm' | 'dots' | 'none' | 'actionButton'

/**
 * @param variant AppBar의 type을 나타냄 'backPushWithTitle' | 'title' | 'backPush' | 'logo'
 * @param label 'backPush' | 'backPushWithTitle' 사용 시 Appbar에 나타날 문구
 * @param beforeUrl (optional) BackArrow를 통하여 이동할 url (기본 값은 뒤로 가기)
 * @param rightChildren 오른쪽에 들어갈 아이콘의 type을 나타냄 'alarm' | 'dots' | 'none' | 'actionButton'
 * @param onClickOption1 첫 번째 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수
 * @param onClickOption2 두 번째 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수
 */

export type AppBarProps =
  | {
      variant: AppBarType
      label?: string
      beforeUrl?: string
      onClickOption1?: () => void
      onClickOption2?: () => void
      rightChildren?: 'alarm' | 'dots' | 'none'
      rightChildrenIcon?: undefined
    }
  | {
      variant: AppBarType
      label?: string
      beforeUrl?: string
      onClickOption1?: () => void
      onClickOption2?: () => void
      rightChildren?: 'actionButton'
      rightChildrenIcon?: React.ReactNode
    }

export const AppBar = ({
  variant = 'logo',
  label,
  beforeUrl,
  rightChildren = 'alarm',
  rightChildrenIcon,
  onClickOption1,
  onClickOption2,
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
      {variant === 'logo' ? (
        <Svg children={<TifyLogo />} onClick={onClickLogo} />
      ) : (
        <FirstElement>
          {(variant === 'backPush' || variant === 'backPushWithTitle') && (
            <Svg children={<LeftArrow />} onClick={onClickBackBar} />
          )}
          <Text typo="Subhead_16" color="gray_200">
            {label}
          </Text>
        </FirstElement>
      )}
      {rightChildren === 'alarm' ? (
        <FlexBox>
          <Svg
            children={<Alert />}
            onClick={onClickOption1}
            style={{ margin: '0 16px 0 0' }}
          />
          <Svg children={<ThreeDots />} onClick={onClickOption2} />
        </FlexBox>
      ) : rightChildren === 'dots' ? (
        <Svg children={<ThreeDots />} onClick={onClickOption1} />
      ) : rightChildren === 'actionButton' ? (
        rightChildrenIcon
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
