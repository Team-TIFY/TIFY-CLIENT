import styled from "@emotion/styled";

import { useState } from 'react';

import { Day } from "../../Day";
import { TodayKeyType } from "..";

export type DaysKeyType = 'M' | 'T' | 'W' | 'T' | 'F' | 'S' | 'S';

interface WeekPropsType {
  today: TodayKeyType;
}

export const Week = ({ today }: WeekPropsType ) => {
  const week: DaysKeyType[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const [selectedDay, setSelectedDay] = useState(today);

  const handleDayClick = (index: TodayKeyType) => {
    setSelectedDay(index);
  };

  return (
    <Wrapper>
      {week.map((day, idx) =>
        <Day
          key={idx}
          children={day}
          variant={selectedDay === idx ? 'selected' : selectedDay > idx ? 'dayBefore' : 'dayAfter'}
          leftDown={idx % 2 === 1}
          onClick={() => handleDayClick(idx as TodayKeyType)}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 12px;
`;