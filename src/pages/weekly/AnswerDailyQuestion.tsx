import DailyQuestionBox from "@components/WeeklyQuestion/DailyQuestionBox"
import { Input } from "@components/atoms/Input"
import { FlexBox } from "@components/layouts/FlexBox"
import { Spacing } from "@components/atoms/Spacing"
import { useEffect, useRef, useState } from "react"
import { Button } from "@components/atoms/Button"
import styled from "@emotion/styled"

const AnswerDailyQuestion = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [toggled, setToggle] = useState<boolean>(true)
    const divRef = useRef<HTMLDivElement>(null)
    let initialState = false
    const handleToggleInput = () => {
        if(!initialState) {
            initialState = true
            setToggle(false)
        }
    }
    useEffect(() => {
        const handleVisualViewPortResize = () => {
            const currentVisualViewport = Number(window.visualViewport?.height)
            if(divRef){
                divRef.current!.style.height = `${currentVisualViewport - 30}px`
                window.scrollTo(0, 80)
            }
        }
        if (window.visualViewport){
            window.visualViewport.onresize = handleVisualViewPortResize;
        }
 
    }, [])

    return (
        <AnswerDailyQuestionContainer ref={divRef}>
            <DailyQuestionBox/>
            {toggled && (
                <FlexBox direction={"column"} fullWidth={true}>
                    <div 
                        style={{background:'rgb(255, 153, 207, 0.3)', cursor: 'pointer',
                        height:'240px', width: '100%', color: 'white', textAlign:'center'   
                    }}
                    onClick={() => setToggle(false)}
                    >
                    이미지 영역
                    </div>
                    <Spacing variant="default" height={64}/>
                </FlexBox>
                )
            }
            <Input className='inputQuestion' ref={inputRef} onClick={handleToggleInput} fullWidth = {true} variant="withInst" 
                    explanation="입력하면 친구들의 답변을 볼 수 있어요!"/>
            <BottomSticker>
                {!toggled && ( <Button variant="mediumRound">버튼버튼</Button> )}
            </BottomSticker>
        </AnswerDailyQuestionContainer>
    )
}

export default AnswerDailyQuestion

const BottomSticker = styled.div<{}>`
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .inputQuestion: {
        position: relative;
    }
`
const AnswerDailyQuestionContainer = styled.div`
    position: relative;
    height: calc(100vh - 80px);
`