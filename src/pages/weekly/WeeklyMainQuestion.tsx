import { Spacing } from '@components/atoms/Spacing'
import { Week } from '@components/atoms/DayWeek/WeekGroup/Week'
import styled from '@emotion/styled'
import { dateState } from '@libs/store/date'
import { WeeklyApi } from '@utils/apis/weekly/WeeklyApi'
import { useRecoilState } from 'recoil'
import DailyQuestionBox from '@components/WeeklyQuestion/DailyQuestionBox'
import { questionState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import QuestionImg from '@components/WeeklyQuestion/QuestionImg'
import BottomSheet from '@components/atoms/BottomSheet'
import useBottomSheet from '@libs/hooks/useBottomSheet'
import GreetingOnboarding from '@components/onboarding/GreetingOnboarding'

const WeeklyMainQuestion = () => {
  const [date, setDate] = useRecoilState(dateState)
  const [question, setQuestion] = useRecoilState(questionState)
  const navigate = useNavigate()
  const { bottomSheetRef, isBottomSheetOpen } = useBottomSheet({
    initialState:
      localStorage.getItem('isOnboardingFavor') === 'true' ? true : false,
    delaytime: 3200,
  })
  const handleAnswerQuestion = async () => {
    const data = await WeeklyApi.ALREADY_ANSWERED(question.questionId)
    if (!data) navigate('weekly/answer')
    else {
      navigate('weekly/answers')
    }
  }

  return (
    <WeekContainer>
      <BottomSheet
        isexpanded={isBottomSheetOpen}
        bottomSheetRef={bottomSheetRef}
      >
        <GreetingOnboarding />
      </BottomSheet>
      <BackgroundImg />
      <WeekWrapper>
        <Spacing variant="default" height={48} />
        <Week today={date.today} />
        <div className="dailyQuestionBox">
          <DailyQuestionBox />
        </div>
        <div
          style={{
            cursor: 'pointer',
            height: '242px',
            textAlign: 'center',
          }}
          className="QuestionImg"
          onClick={handleAnswerQuestion}
        >
          <QuestionImg category={question.category} />
        </div>
      </WeekWrapper>
    </WeekContainer>
  )
}
export default WeeklyMainQuestion

const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  background-color: #2e2159;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(0px);
    }
    to {
      opacity: 1;
      transform: translateY(-10px);
    }
  }
  .QuestionImg {
    animation: 0.5s forwards fadeIn cubic-bezier(0.61, 1, 0.88, 1);
    animation-delay: 0.4s;
    opacity: 0;
  }
`
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/weekly_background.png');
  background-size: cover;
  position: absolute;
  top: 0;
`
const WeekWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
`
