import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { Spacing } from '@components/atoms/Spacing'
import { useRecoilState } from 'recoil'
import { questionState } from '@libs/store/question'
import { dateState } from '@libs/store/date'
import { useEffect, useState } from 'react'

const DailyQuestionBox = () => {
  const [date, setDate] = useRecoilState(dateState)
  const [question, setQuestion] = useRecoilState(questionState)
  const [day, setDay] = useState<string>('')

  useEffect(() => {
    getDayWeek(date.selectedDate)
  }, [date.dateString])

  const getDayWeek = (day: number) => {
    if (date.selectedDate === date.today) {
      setDay('오늘')
      return
    }
    switch (day) {
      case 0:
        setDay('월요일')
        break
      case 1:
        setDay('화요일')
        break
      case 2:
        setDay('수요일')
        break
      case 3:
        setDay('목요일')
        break
      case 4:
        setDay('금요일')
        break
      case 5:
        setDay('토요일')
        break
      case 6:
        setDay('일요일')
        break
    }
  }

  return (
    <>
      <Spacing variant="default" height={48} />
      <FlexBox
        direction="column"
        gap={8}
        style={{ padding: '0px 24px', textAlign: 'center' }}
      >
        <Text as="div" typo="Caption_12R" color="gray_200">
          {day}의 질문
        </Text>
        <Text typo="SCD_Headline_24" color="white">
          {question.content}
        </Text>
        <Spacing variant="default" height={64} />
      </FlexBox>
    </>
  )
}

export default DailyQuestionBox
