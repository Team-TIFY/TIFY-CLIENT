import DailyQuestionBox from '@components/WeeklyQuestion/DailyQuestionBox'
import styled from '@emotion/styled'
import { WeeklyApi } from '@utils/apis/weekly/WeeklyApi'
import { useRecoilState } from 'recoil'
import { questionState } from '@libs/store/question'
import { RoundButton } from '@components/atoms/RoundButton'
import Poke from '@assets/icons/Poke'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import QuestionImg from '@components/WeeklyQuestion/QuestionImg'
import { useQuery } from '@tanstack/react-query'
import DailyAnswerListContainer from '@components/WeeklyQuestion/Answer/DailyAnswerListContainer'
import { authState } from '@libs/store/auth'
import { getNotAnswerFriends } from '@utils/getNotAnswerFriends'

const CheckAllAnswers = () => {
  const [question, setQuestion] = useRecoilState(questionState)
  const [auth, setAuth] = useRecoilState(authState)

  const { data: neighborAnswers } = useQuery(['neighborInfo'], () =>
    WeeklyApi.GET_NEIGHBOR_ANSWERS({
      questionId: question.questionId,
      userId: auth.userProfile.id,
    }),
  )

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
      <Spacing variant="default" height={20} />
      <AnswerListContainer>
        {neighborAnswers?.length === 0 ? (
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
          </>
        ) : (
          <>
            <Text
              color="gray_200"
              typo="Caption_12R"
              style={{ marginBottom: '3px' }}
            >
              {getNotAnswerFriends(neighborAnswers ? neighborAnswers : [])}
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
            <DailyAnswerListContainer
              questionId={question.questionId}
              answerData={neighborAnswers ? neighborAnswers : []}
            />
          </>
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
  margin-bottom: 10px;
`
