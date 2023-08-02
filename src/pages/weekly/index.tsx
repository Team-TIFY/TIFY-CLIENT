import { Spacing } from "@components/atoms/Spacing"
import { Text } from "@components/atoms/Text"
import { Week } from "@components/atoms/DayWeek/WeekGroup/Week"
import styled from "@emotion/styled"

export const WeeklyQuestion = () => {
    return (
        <WeekContainer>
            <Spacing variant='default' height={48}/>
            <Week today={2}/>
            <Text typo={'Body_14'} color="white">데일리 질문</Text>
        </WeekContainer>
    )
}

const WeekContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`