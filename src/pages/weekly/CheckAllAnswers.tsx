import DailyQuestionBox from '@components/WeeklyQuestion/DailyQuestionBox'
import styled from '@emotion/styled'
import { CountDailyQuestion } from '@libs/types/questionType'
import { useMutation } from '@tanstack/react-query'
import { WeeklyApi } from '@utils/apis/weekly/WeeklyApi'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { questionState } from '@libs/store/question'
import { RoundButton } from '@components/atoms/RoundButton'
import Poke from '@assets/icons/Poke'
import { FlexBox } from '@components/layouts/FlexBox'
import { useInfiniteQueries } from '@libs/hooks'
import AnswerList from '@components/WeeklyQuestion/AnswerList'
import { Spacing } from '@components/atoms/Spacing'

const CheckAllAnswers = () => {
  const [question, setQuestion] = useRecoilState(questionState)
  const [count, setCount] = useState<number>(0)
  const { infiniteListElement, isEmpty } = useInfiniteQueries(
    ['answerList', question.questionId],
    ({ pageParam = 0 }) =>
      WeeklyApi.GET_ANSWERS({
        //TODO: questionId 목업이 갖춰지면 진짜 id로 바꿔줄 것
        questionId: 9,
        pageParam: pageParam,
      }),
    AnswerList,
    { refetchInterval: 2000 },
  )
  const countQuestionMutation = useMutation(WeeklyApi.COUNT_ANSWER, {
    onSuccess: (data: CountDailyQuestion) => {
      setCount(data.answerCount)
    },
  })

  useEffect(() => {
    if (question.questionId) countQuestionMutation.mutate(9)
    //TODO: Mock데이터가 온전히 채워진 경우 경우에 맞는 questionId로 변경할 것
    //countQuestionMutation.mutate(question.questionId)
  }, [question.questionId])
  return (
    <WeekAnswersContainer>
      <DailyQuestionBox />
      <div
        style={{
          background: 'rgb(255, 153, 207, 0.3)',
          cursor: 'pointer',
          width: '100%',
          minHeight: '242px',
          margin: '60px 0px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        이미지 영역
      </div>
      <RoundButton variant="smallRound" width={240} fullWidth={false}>
        <FlexBox align="center" gap={8}>
          답변 안한 친구 찌르러 가기
          <Poke />
        </FlexBox>
      </RoundButton>
      <Spacing variant="default" height={24} />
      <AnswerListContainer>
        {isEmpty ? <>아무것도 없어요</> : <>{infiniteListElement}</>}
      </AnswerListContainer>
    </WeekAnswersContainer>
  )
}

export default CheckAllAnswers

const WeekAnswersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: scroll;
`

const AnswerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
