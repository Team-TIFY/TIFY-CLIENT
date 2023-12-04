import { FlexBox } from '@components/layouts/FlexBox'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import useGetDate from '@libs/hooks/useGetDate'
import { theme } from '@styles/theme'
import { Spacing } from '../Spacing'
import { Text } from '../Text'

type TodayAnswerType = {
  answerTime: string
  question: string
  answer: string
}

type TodayListPropsType = {
  todayAnswerList: TodayAnswerType[]
  isLastMonth: boolean
}

const TodayList = ({ todayAnswerList, isLastMonth }: TodayListPropsType) => {
  const { getYearAndMonthAndDayFromDate } = useGetDate()

  return (
    <>
      {todayAnswerList.map((answer, index) => {
        const { formattedYear, formattedMonth, formattedDate } =
          getYearAndMonthAndDayFromDate(answer.answerTime)

        return (
          <TodayListWrapper key={index}>
            <FlexBox justify="space-between" style={{ width: '100%' }}>
              {index === 0 && (
                <>
                  <Text typo="Mont_Caption_12B" color="gray_300">
                    {formattedMonth}
                  </Text>
                  <Text typo="Mont_Caption_12B" color="gray_300">
                    {formattedYear}
                  </Text>
                </>
              )}
            </FlexBox>
            <Text
              typo="Body_16"
              color="gray_300"
              style={{ marginRight: 'auto' }}
            >
              {formattedDate}
            </Text>
            <FlexBox
              direction="column"
              gap={12}
              align="flex-start"
              style={{
                borderLeft: `1px dashed ${theme.palette.gray_500}`,
                width: '100%',
                marginLeft: '16px',
                padding: `2px 12px`,
              }}
            >
              <Text typo="SCD_Body_12L" color="gray_100">
                {`Q. ` + answer.question}
              </Text>
              <Text typo="SCD_Body_12M" color="gray_100">
                {`A. ` + answer.answer}
              </Text>
            </FlexBox>
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
