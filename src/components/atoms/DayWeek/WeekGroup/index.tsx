import styled from '@emotion/styled'

import { todayList } from '@constants/common/todayList'
import { Week } from './Week'

export const WeekGroup = () => {
  return (
    <Wrapper>
      <WeekWrapper>
        {todayList.map((today) => (
          <Week key={today} today={today} />
        ))}
      </WeekWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-grid;
`

const WeekWrapper = styled.div`
  display: grid;
  gap: 20px;
`
