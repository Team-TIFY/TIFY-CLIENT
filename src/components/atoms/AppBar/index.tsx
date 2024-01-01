import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import {
  RightChildrenVariantType,
  AppBarPropsType,
} from '@models/components/atoms/AppBar'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '../Text'
import Svg from '../Svg'
import TifyLogo from '@assets/icons/TifyLogo'
import LeftArrow from '@assets/icons/LeftArrow'
import Alert from '@assets/icons/Alert'
import ThreeDots from '@assets/icons/ThreeDots'

export const AppBar = ({
  variant = 'logo',
  label,
  beforeUrl,
  stepNum = [0, 0],
  rightChildren = 'alarm',
  rightChildrenIcon,
  onClickOption,
  customHandler,
  isLabelAlignCenter = false,
}: AppBarPropsType<RightChildrenVariantType>) => {
  const navigate = useNavigate()

  const onClickBackBar = () => {
    if (customHandler) {
      customHandler()
    } else {
      beforeUrl ? navigate(beforeUrl) : navigate(-1)
    }
  }

  const onClickLogo = () => {
    navigate('/')
  }

  const handleRightChildren = (rightElement: RightChildrenVariantType) => {
    if (rightElement === 'alarm')
      return (
        <FlexBox>
          <Svg
            children={<Alert />}
            onClick={onClickOption}
            style={{ margin: '0 16px 0 0' }}
          />
        </FlexBox>
      )
    else if (rightElement === 'dots')
      return <Svg children={<ThreeDots />} onClick={onClickOption} />
    else if (rightElement === 'actionButton') {
      return (
        <FlexBox gap={16} style={{ cursor: 'pointer' }}>
          {Array.isArray(rightChildrenIcon) &&
            rightChildrenIcon.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
        </FlexBox>
      )
    } else if (rightElement === 'stepNum') {
      return (
        <FlexBox>
          <Text typo="Body_14" color="purple_400">
            {stepNum[0]}
          </Text>
          <Text typo="Body_14" color="gray_100">
            /{stepNum[1]}
          </Text>
        </FlexBox>
      )
    } else {
      return null
    }
  }

  const labelTextStyle: React.CSSProperties = {
    position: isLabelAlignCenter ? 'absolute' : undefined,
    margin: isLabelAlignCenter ? 'auto' : undefined,
    left: isLabelAlignCenter ? '0' : undefined,
    right: isLabelAlignCenter ? '0' : undefined,
    width: 'fit-content',
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
          <Text typo="Subhead_16" color="gray_200" style={labelTextStyle}>
            {label}
          </Text>
        </FirstElement>
      )}
      {handleRightChildren(rightChildren)}
    </Wrapper>
  )
}

const Wrapper = styled(FlexBox)`
  height: 80px;
  width: 100%;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 40px 16px 16px 16px;
  background-color: ${theme.palette.background};
  z-index: 100;
`

const FirstElement = styled(FlexBox)`
  position: relative;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  & > h1:nth-of-type(1) {
    padding-top: 3px;
  }
`
