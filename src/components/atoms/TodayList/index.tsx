import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import useGetDate from '@libs/hooks/useGetDate'
import { TodayListPropsType } from '@models/components/atoms/TodayCategory'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '../Spacing'
import TodayListHeader from './TodayListHeader'
import TodayQnA from './TodayQnA'

const TodayList = ({ todayAnswerList, isLastMonth }: TodayListPropsType) => {
  const { getYearAndMonthAndDayFromDate } = useGetDate()

  return (
    <>
      {todayAnswerList.map((answer, index) => {
        const { formattedYear, formattedMonth, formattedDate } =
          getYearAndMonthAndDayFromDate(answer.answerTime)

        return (
          <TodayListWrapper key={index}>
            <TodayListHeader
              index={index}
              formattedYear={formattedYear}
              formattedMonth={formattedMonth}
              formattedDate={formattedDate}
            />
            <TodayQnA answer={answer} />
          </TodayListWrapper>
        )
      })}
      {isLastMonth ? (
        <Spacing height={56} />
      ) : (
        <>
          <Spacing
            height={32}
            style={css`
              border-bottom: 1px solid ${theme.palette.gray_800};
            `}
          />
          <Spacing height={20} />
        </>
      )}
    </>
  )
}

export default TodayList

const TodayListWrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  gap: 6px;
`
