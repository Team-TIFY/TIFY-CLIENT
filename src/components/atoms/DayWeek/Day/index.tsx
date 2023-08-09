import styled from "@emotion/styled";
import { theme } from "@styles/theme";

import { DaysKeyType } from "../WeekGroup/Week";

import dayAfterLeftDown from "../../../../assets/icons/dayAfterLeftDown.svg";
import dayBeforeLeftDown from "../../../../assets/icons/dayBeforeLeftDown.svg";
import daySelectedLeftDown from "../../../../assets/icons/daySelectedLeftDown.svg";
import dayBeforeRightUp from "../../../../assets/icons/dayBeforeRightUp.svg";
import daySelectedRightUp from "../../../../assets/icons/daySelectedRightUp.svg";
import dayAfterRightUp from "../../../../assets/icons/dayAfterRightUp.svg";

interface DayPropsType {
  children: DaysKeyType;
  variant: 'dayBefore' | 'selected' | 'dayAfter';
  leftDown: boolean;
  onClick: () => void;
}

const TEXT_COLOR_TYPE = {
  'dayBefore': `${theme.palette.lemon_300}`,
  'selected': `${theme.palette.gray_800}`,
  'dayAfter': `${theme.palette.gray_500}`,
  'untilToday': `${theme.palette.lemon_300}`
}

export const Day = ({ children, variant, leftDown, onClick }: DayPropsType) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <StyledDay variant={variant} onClick={handleClick}>
      <img
        src={
          variant === 'dayBefore'
            ? leftDown
              ? dayBeforeLeftDown
              : dayBeforeRightUp
            : variant === 'selected'
            ? leftDown
              ? daySelectedLeftDown
              : daySelectedRightUp
            : leftDown
            ? dayAfterLeftDown
            : dayAfterRightUp
        }
      />
      <StyledDayChild>{children}</StyledDayChild>
    </StyledDay>
  );
};

const StyledDay = styled.div<{
  variant: 'dayBefore' | 'selected' | 'dayAfter';
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
`;

const StyledDayChild = styled.div`
  position: absolute;
`;