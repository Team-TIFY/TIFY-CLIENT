import styled from "@emotion/styled";
import { Week } from "./Week";

export type TodayKeyType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const todayList: TodayKeyType[] = [0, 1, 2, 3, 4, 5, 6];

export const WeekGroup = () => {
  return (
    <Wrapper>
      <WeekWrapper>
        {todayList.map((today) => (
          <Week key={today} today={today} />
        ))}
      </WeekWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-grid;
`;

const WeekWrapper = styled.div`
  display: grid;
  gap: 20px;
`;