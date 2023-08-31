import DailyQuestionBox from "@components/WeeklyQuestion/DailyQuestionBox"
import styled from "@emotion/styled"
import { CountDailyQuestion } from "@libs/types/questionType";
import { useMutation } from "@tanstack/react-query"
import { WeeklyApi } from "@utils/apis/weekly/WeeklyApi"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import { questionState } from "@libs/store/question";

const CheckAllAnswers = () => {
    const [count, setCount] = useState<number>(0)
    const [question, setQuestion] = useRecoilState(questionState)
    const countQuestionMutation = useMutation(WeeklyApi.COUNT_ANSWER, {
        onSuccess: (data: CountDailyQuestion) => {
            setCount(data.answerCount)
        },
    });

    const fetchAnswers = () => {

    }

    useEffect(() => {
        if (question.questionId)
            countQuestionMutation.mutate(question.questionId)
    }, [question.questionId])

    return (
        <WeekAnswersContainer>
            <DailyQuestionBox />
            <div
                style={{
                    background: 'rgb(255, 153, 207, 0.3)', cursor: 'pointer',
                    height: '242px', margin: '60px 0px', color: 'white', textAlign: 'center'
                }}>
                이미지 영역
            </div>
        </WeekAnswersContainer>
    )
}

export default CheckAllAnswers

const WeekAnswersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    position: relative;
`