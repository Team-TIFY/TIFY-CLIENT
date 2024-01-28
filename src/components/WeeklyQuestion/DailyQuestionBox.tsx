import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { Spacing } from '@components/atoms/Spacing'
import { useRecoilState } from 'recoil'
import { questionState } from '@libs/store/question'
import { dateState } from '@libs/store/date'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { media } from '@styles/theme'

const DailyQuestionBox = () => {
  const [date, setDate] = useRecoilState(dateState)
  const [question, setQuestion] = useRecoilState(questionState)
  const [day, setDay] = useState<string>('')
  console.log(question)

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
    <QuestionBoxContainer>
      <Spacing variant="default" height={48} />
      <FlexBox
        direction="column"
        gap={8}
        style={{ padding: '0px 24px', textAlign: 'center' }}
      >
        <Text as="div" typo="Caption_12R" color="gray_200" className="title">
          {day}의 질문
        </Text>
        <Text typo="SCD_Headline_24" color="white" className="subTitle">
          {question.content}
        </Text>
        <div className="ImgSpacingBox"></div>
      </FlexBox>
    </QuestionBoxContainer>
  )
}

export default DailyQuestionBox

const QuestionBoxContainer = styled.div`
  flex-shrink: 0;
  height: 140px;
  @keyframes fadeIn1 {
    from {
      opacity: 0;
      transform: translateY(0px);
    }
    to {
      opacity: 1;
      transform: translateY(-10px);
    }
  }
  @keyframes movetoY {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-10px);
    }
  }
  .title {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: movetoY, fadeIn1;
    animation-duration: 0.8s, 0.4s;
    animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1),
      cubic-bezier(0.61, 1, 0.88, 1);
    animation-delay: 0.1s 0.1s;
  }
  .subTitle {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: movetoY, fadeIn1;
    animation-duration: 0.8s, 0.4s;
    animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1),
      cubic-bezier(0.61, 1, 0.88, 1);
    animation-delay: 0.4s;
  }
  .ImgSpacingBox {
    height: 64px;
    width: 100%;
  }
  ${media.smallMobile} {
    .ImgSpacingBox {
      height: 20px;
    }
  }
`
