import DailyQuestionBox from '@components/WeeklyQuestion/DailyQuestionBox'
import styled from '@emotion/styled'
import { CountDailyQuestion } from '@utils/apis/weekly/questionType'
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
import { Text } from '@components/atoms/Text'
import QuestionImg from '@components/WeeklyQuestion/QuestionImg'

const CheckAllAnswers = () => {
  const [question, setQuestion] = useRecoilState(questionState)
  const [count, setCount] = useState<number>(0)
  const { infiniteListElement, isEmpty } = useInfiniteQueries(
    ['answerList', question.questionId],
    ({ pageParam = 0 }) =>
      WeeklyApi.GET_ANSWERS({
        questionId: question.questionId,
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
    if (question.questionId) countQuestionMutation.mutate(question.questionId)
  }, [question.questionId])
  return (
    <WeekAnswersContainer>
      <DailyQuestionBox />
      <div
        style={{
          cursor: 'pointer',
          width: '100%',
          minHeight: '242px',
          margin: '30px 0px',
          textAlign: 'center',
        }}
      >
        <QuestionImg category={question.category} />
      </div>
      <Spacing variant="default" height={24} />
      <AnswerListContainer>
        {isEmpty ? (
          <>
            <Text color="gray_200" typo="Caption_12R">
              아직 답변을 작성한 친구가 없어요.
            </Text>
            <RoundButton
              style={{ marginBottom: '32px' }}
              variant="smallRound"
              width={240}
              fullWidth={false}
            >
              <FlexBox align="center" gap={8}>
                친구 쿡 찌르기
                <Poke />
              </FlexBox>
            </RoundButton>

            <>{infiniteListElement}</>
          </>
        ) : (
          <>{infiniteListElement}</>
        )}
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
  margin-bottom: 10px;
`
