import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { DayPropsType, DayVariantType } from '@models/components/atoms/DayWeek'
import DayAfterLeftDown from '@assets/icons/DayAfterLeftDown'
import DayAfterRightUp from '@assets/icons/DayAfterRightUp'
import DayBeforeLeftDown from '@assets/icons/DayBeforeLeftDown'
import DayBeforeRightUp from '@assets/icons/DayBeforeRightUp'
import DaySelectedLeftDown from '@assets/icons/DaySelectedLeftDown'
import DaySelectedRightUp from '@assets/icons/DaySelectedRightUp'
import Svg from '@components/atoms/Svg'

const TEXT_COLOR_TYPE = {
  dayBefore: `${theme.palette.lemon_300}`,
  selected: `${theme.palette.gray_800}`,
  dayAfter: `${theme.palette.gray_500}`,
  untilToday: `${theme.palette.lemon_300}`,
}

export const Day = ({ children, variant, leftDown, onClick }: DayPropsType) => {
  const handleClick = () => {
    onClick?.()
  }

  const handleSvgIcon = () => {
    if (variant === 'dayBefore') {
      return leftDown ? <DayBeforeLeftDown /> : <DayBeforeRightUp />
    } else if (variant === 'selected') {
      return leftDown ? <DaySelectedLeftDown /> : <DaySelectedRightUp />
    } else {
      return leftDown ? <DayAfterLeftDown /> : <DayAfterRightUp />
    }
  }

  return (
    <StyledDay variant={variant} onClick={handleClick}>
      <Svg children={handleSvgIcon()} />
      <StyledDayChild>{children}</StyledDayChild>
    </StyledDay>
  )
}

const StyledDay = styled.div<{
  variant: DayVariantType
}>`
  ${theme.typo.Mont_Caption_12SB};
  color: ${({ variant }) => `${TEXT_COLOR_TYPE[variant]}`};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

const StyledDayChild = styled.div`
  position: absolute;
`
