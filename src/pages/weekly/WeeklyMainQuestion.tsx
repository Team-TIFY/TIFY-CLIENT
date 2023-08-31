import { Spacing } from "@components/atoms/Spacing"
import { Week } from "@components/atoms/DayWeek/WeekGroup/Week"
import styled from "@emotion/styled"
import useGetDate from "@libs/hooks/useGetDate"
import { useEffect } from "react"
import { dateState } from "@libs/store/date"
import { useMutation } from "@tanstack/react-query"
import { WeeklyApi } from "@utils/apis/weekly/WeeklyApi"
import { useRecoilState } from "recoil"
import DailyQuestionBox from "@components/WeeklyQuestion/DailyQuestionBox"
import { questionState } from "@libs/store/question"
import { useNavigate } from "react-router-dom"

const WeeklyMainQuestion = () => {
    const [date, setDate] = useRecoilState(dateState)
    const [question, setQuestion] = useRecoilState(questionState)
    const { getTodayDate } = useGetDate()
    const navigate = useNavigate()

    const handleAnswerQuestion = async () => {
        const data = await WeeklyApi.ALREADY_ANSWERED(question.questionId)
        if (!data) navigate('answer')
        else {
            navigate('answers')
        }
    }

    return (
        <WeekContainer>
            <BackgroundImg />
            <WeekWrapper>
                <Spacing variant='default' height={48} />
                <Week today={date.today} />
                <DailyQuestionBox />
                <div
                    style={{
                        background: 'rgb(255, 153, 207, 0.3)', cursor: 'pointer',
                        height: '242px', margin: '60px 0px', color: 'white', textAlign: 'center'
                    }}
                    onClick={handleAnswerQuestion}>
                    이미지 영역
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
    background-color: #2E2159;
    position: relative;
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
    width :100%;
    position: absolute;
    z-index: 1;
`