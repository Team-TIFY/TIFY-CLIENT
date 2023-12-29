import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'

import {
  DaysKeyType,
  TodayKeyType,
  WeekPropsType,
} from '@models/components/atoms/DayWeek'
import useGetDate from '@libs/hooks/useGetDate'
import { dateState } from '@libs/store/date'
import { Day } from '../../Day'

export const Week = ({ today }: WeekPropsType) => {
  const [date, _] = useRecoilState(dateState)
  const { setNewDate } = useGetDate()
  const week: DaysKeyType[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  const handleDayClick = (index: TodayKeyType) => {
    if (index > date.today) return
    const calDate = date.today - index
    setNewDate(calDate)
  }

  const handleVariant = (idx: number) => {
    if (date.selectedDate === idx) {
      return 'selected'
    } else if (today >= idx) {
      return 'dayBefore'
    } else {
      return 'dayAfter'
    }
  }
  return (
    <Container>
      <Wrapper>
        {week.map((day, idx) => (
          <Day
            key={idx}
            children={day}
            variant={handleVariant(idx)}
            leftDown={idx % 2 === 1}
            onClick={() => {
              handleDayClick(idx as TodayKeyType)
            }}
          />
        ))}
      </Wrapper>
    </Container>
  )
}

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
`
