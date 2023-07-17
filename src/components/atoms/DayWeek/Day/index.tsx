import styled from "@emotion/styled";
import { theme } from "@styles/theme";

import { DaysKeyType } from "../WeekGroup/Week";

import dayLeftDownDayAfterImgUrl from "../../../../assets/image/day_leftdown_dayafter.svg";
import dayLeftDownDayBeforeImgUrl from "../../../../assets/image/day_leftdown_daybefore.svg";
import dayLeftDownSelectedImgUrl from "../../../../assets/image/day_leftdown_selected.svg";
import dayRightUpDayBeforeImgUrl from "../../../../assets/image/day_rightup_daybefore.svg";
import dayRightUpSelectedImgUrl from "../../../../assets/image/day_rightup_selected.svg";
import dayRightUpDayAfterImgUrl from "../../../../assets/image/day_rightup_dayafter.svg";

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
              ? dayLeftDownDayBeforeImgUrl
              : dayRightUpDayBeforeImgUrl
            : variant === 'selected'
            ? leftDown
              ? dayLeftDownSelectedImgUrl
              : dayRightUpSelectedImgUrl
            : leftDown
            ? dayLeftDownDayAfterImgUrl
            : dayRightUpDayAfterImgUrl
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