import DailyQuestionBox from "@components/WeeklyQuestion/DailyQuestionBox"
import { Input } from "@components/atoms/Input"
import { FlexBox } from "@components/layouts/FlexBox"
import { Spacing } from "@components/atoms/Spacing"
import { useEffect, useRef, useState } from "react"
import { RoundButton } from "@components/atoms/RoundButton"
import styled from "@emotion/styled"
import { theme } from "@styles/theme"
import { useRecoilState } from "recoil"
import { questionState } from "@libs/store/question"
import { WeeklyApi } from "@utils/apis/weekly/WeeklyApi"

const AnswerDailyQuestion = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null)
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
            answer: inputRef.current!.value
        })
    }

    const handleButtonDisabled = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        //TODO: debounce 이벤트 훅 걸어두기! 꼭!
        let textValue = e.target.value;
        if (textValue.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
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
            window.visualViewport.onresize = handleVisualViewPortResize;
        }

    }, [])

    return (
        <AnswerDailyQuestionContainer ref={divRef}>
            <DailyQuestionBox />
            {toggled && (
                <FlexBox direction={"column"} fullWidth={true}>
                    <div
                        style={{
                            background: 'rgb(255, 153, 207, 0.3)', cursor: 'pointer',
                            height: '240px', width: '100%', color: 'white', textAlign: 'center'
                        }}
                        onClick={() => setToggle(false)}
                    >
                        이미지 영역
                    </div>
                    <Spacing variant="default" height={64} />
                </FlexBox>
            )
            }
            <InputSticker isBottom={toggled}>
                <Input className={toggled ? 'bottomInput' : undefined} ref={inputRef} onClick={handleToggleInput}
                    customEvent={handleButtonDisabled}
                    fullWidth={true} variant={toggled ? 'withInst' : 'default'}
                    explanation="입력하면 친구들의 답변을 볼 수 있어요!" />
            </InputSticker>
            <BottomSticker>
                {!toggled && (
                    <RoundButton disabled={disabled}
                        onClick={submitAnswer}
                        variant="mediumRound">답변 완료</RoundButton>
                )
                }
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
`

const InputSticker = styled.div<{ isBottom: boolean }>`
    width : 100%;
    position : ${({ isBottom }) => isBottom ? 'absolute' : 'relative'};
    bottom : ${({ isBottom }) => isBottom ? '64px' : undefined};
`