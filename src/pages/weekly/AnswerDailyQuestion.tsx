import DailyQuestionBox from '@components/WeeklyQuestion/DailyQuestionBox'
import { Spacing } from '@components/atoms/Spacing'
import { useEffect, useRef, useState } from 'react'
import { RoundButton } from '@components/atoms/RoundButton'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useRecoilState } from 'recoil'
import { questionState } from '@libs/store/question'
import { WeeklyApi } from '@utils/apis/weekly/WeeklyApi'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LongInput } from '@components/atoms/Input/LongInput'
import VideoBox from '@components/WeeklyQuestion/VideoBox'

const AnswerDailyQuestion = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const navigate = useNavigate()
  const [question, setQuestion] = useRecoilState(questionState)
  const [toggled, setToggle] = useState<boolean>(true)
  const [disabled, setDisabled] = useState<boolean>(true)
  const divRef = useRef<HTMLDivElement>(null)
  let initialState = false
  const handleToggleInput = () => {
    if (!initialState) {
      initialState = true
      setToggle(false)
    }
  }

  const submitAnswer = async () => {
    await WeeklyApi.ANSWER_QUESTION({
      questionId: question.questionId,
      answer: inputRef.current!.value,
    })
    navigate('weekly/answers')
  }

  const handleButtonDisabled = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //TODO: debounce 이벤트 훅 걸어두기! 꼭!
    const textValue = e.target.value
    if (textValue.length === 0 || textValue.length > 40) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  useEffect(() => {
    const handleVisualViewPortResize = () => {
      const currentVisualViewport = Number(window.visualViewport?.height)
      if (divRef) {
        divRef.current!.style.height = `${currentVisualViewport - 30}px`
        window.scrollTo(0, 40)
      }
    }
    if (window.visualViewport) {
      window.visualViewport.onresize = handleVisualViewPortResize
    }
  }, [])

  return (
    <AnswerDailyQuestionContainer ref={divRef}>
      <div className="dailyQuestionBox">
        <DailyQuestionBox />
      </div>
      <ToggleSection isToggle={toggled}>
        <div
          style={{
            cursor: 'pointer',
            height: `${toggled ? '0px' : '240px'}`,
            width: '100%',
            textAlign: 'center',
          }}
          className="QuestionImg"
          onClick={() => setToggle(false)}
        >
          <VideoBox category={question.category} isToggled={toggled} />
        </div>
        <Spacing variant="default" height={64} />
      </ToggleSection>

      <InputSticker isBottom={toggled}>
        <div className="InputSticker">
          <LongInput
            className={toggled ? 'bottomInput' : undefined}
            ref={inputRef}
            onClick={handleToggleInput}
            customEvent={handleButtonDisabled}
            fullWidth={true}
            variant={toggled ? 'withInst' : 'default'}
            explanation="입력하면 친구들의 답변을 볼 수 있어요!"
          />
        </div>
      </InputSticker>
      <BottomSticker>
        {!toggled && (
          <motion.button
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            style={{ position: 'absolute', bottom: '32px' }}
          >
            <RoundButton
              disabled={disabled}
              onClick={submitAnswer}
              variant="mediumRound"
              style={{ width: '130px' }}
            >
              답변 완료
            </RoundButton>
          </motion.button>
        )}
      </BottomSticker>
    </AnswerDailyQuestionContainer>
  )
}

export default AnswerDailyQuestion

const BottomSticker = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const AnswerDailyQuestionContainer = styled.div`
  position: relative;
  height: calc(var(--vh, 1vh) * 100 - 80px);
  background-color: ${theme.palette.background};

  @keyframes fadeIn2 {
    from {
      opacity: 0;
      transform: translateY(0px);
    }
    to {
      opacity: 1;
      transform: translateY(10px);
    }
  }
  .InputSticker {
    animation: 1.5s forwards fadeIn2 cubic-bezier(0.61, 1, 0.88, 1);
    animation-delay: 0.4s;
    opacity: 0;
  }
`

const InputSticker = styled.div<{ isBottom: boolean }>`
  width: 100%;
  position: ${({ isBottom }) => (isBottom ? 'absolute' : 'relative')};
  bottom: ${({ isBottom }) => (isBottom ? '64px' : undefined)};
`
const ToggleSection = styled.div<{ isToggle: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${({ isToggle }) => (isToggle ? '304px' : '0px')};
  transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);
`
