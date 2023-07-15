import styled from "@emotion/styled";
import { Day, DaysKeyType } from "../Day";

interface WeekPropsType {
  today: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export const Week = ({ today }: WeekPropsType ) => {
  const week: DaysKeyType[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  return (
    <Wrapper>
      {week.map((day, idx) =>
        today === idx ? (
          <Day key={idx} children={day} variant={'selected'} leftDown={idx % 2 === 1} />
        ) : today > idx ? (
          <Day key={idx} children={day} variant={'dayBefore'} leftDown={idx % 2 === 1}/>
        ) : (
          <Day key={idx} children={day} variant={'dayAfter'} leftDown={idx % 2 === 1}/>
        )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 12px;
`;