import styled from "@emotion/styled";
import useGetDate from "@libs/hooks/useGetDate";
import { useState, useEffect } from 'react';
import { Day } from "../../Day";
import { Dispatch, SetStateAction } from "react";
import { TodayKeyType } from "..";

export type DaysKeyType = 'M' | 'T' | 'W' | 'T' | 'F' | 'S' | 'S';

interface WeekPropsType {
  today: TodayKeyType;
  getNewDate?: Dispatch<SetStateAction<[string, TodayKeyType]>>
}

export const Week = ({ today, getNewDate }: WeekPropsType ) => {
  const week: DaysKeyType[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const [selectedDay, setSelectedDay] = useState(today);
  const { setNewDate } = useGetDate()
  const handleDayClick = (index: TodayKeyType) => {
    if(index > today) return
    setSelectedDay(index);
    const calDate = today - index
    const newDate = setNewDate(calDate)
    if(getNewDate)
      getNewDate(newDate)
  };
  useEffect(() => {
    setSelectedDay(today)
  },[today])
  return (
    <Container>
      <Wrapper>
        {week.map((day, idx) =>
          <Day
            key={idx}
            children={day}
            variant={selectedDay === idx ? 'selected' : selectedDay > idx ? 'dayBefore' : 'dayAfter'}
            leftDown={idx % 2 === 1}
            onClick={() => {handleDayClick(idx as TodayKeyType); }}
          />
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 14px;
  align-items: center;
`;