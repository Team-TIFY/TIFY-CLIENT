import styled from "@emotion/styled";
import useGetDate from "@libs/hooks/useGetDate";
import { Day } from "../../Day";
import { dateState } from "@libs/store/date"
import { useRecoilState } from "recoil"
import { TodayKeyType } from "..";

export type DaysKeyType = 'M' | 'T' | 'W' | 'T' | 'F' | 'S' | 'S';

interface WeekPropsType {
  today: TodayKeyType;
  getNewDate?: () => void;
}

export const Week = ({ today }: WeekPropsType ) => {
  const [date, setDate] = useRecoilState(dateState)
  const { setNewDate } = useGetDate()
  const week: DaysKeyType[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const handleDayClick = (index: TodayKeyType) => {
    if(index > date.today) return
    const calDate = date.today - index
    setNewDate(calDate)
    localStorage.setItem('date', String(calDate))
  };
  return (
    <Container>
      <Wrapper> 
        {week.map((day, idx) =>
          <Day
            key={idx}
            children={day}
            variant={date.selectedDate === idx ? 'selected' : today >= idx ? 'dayBefore' : 'dayAfter'}
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