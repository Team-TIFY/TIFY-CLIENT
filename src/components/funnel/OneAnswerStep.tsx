import { TasteType } from '@utils/apis/favor/TasteType'
import { useQuery } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { RoundButton } from '@components/atoms/RoundButton'
import { useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { theme } from '@styles/theme'
import { Spacing } from '@components/atoms/Spacing'
import { favorQuestionData } from '@libs/store/dummy'
import SquareButton from '@components/atoms/SquareButton'

interface OneAnswerStepProps {
  category: TasteType
  number: number
  setNextStep: () => void
}

const OneAnswerStep = ({
  category,
  number,
  setNextStep,
}: OneAnswerStepProps) => {
  const { data } = useQuery(['question', category, number], () =>
    FavorApi.GET_FAVOR_QUESTION({ category, number }),
  )
  const [answer, setAnswer] = useState<string>('')
  const [step, setStepAnswer] = useRecoilState(answerState)

  const handleAnswerValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (answer === '') {
      setAnswer(e.currentTarget.value)
    } else {
      if (e.currentTarget.value === answer) {
        setAnswer('')
      } else {
        return
      }
    }
  }
  const submitAnswer = () => {
    setStepAnswer({
      ...step,
      favorAnswerDtos: [
        ...step.favorAnswerDtos,
        {
          num: number,
          answer: answer,
        },
      ],
    })
  }

  useEffect(() => {
    if (number === step.favorAnswerDtos.at(-1)?.num) setNextStep()
  }, [step])

  return (
    <OneAnswerStepWrapper>
      <Spacing height={32} />
      <FlexBox direction="column" gap={20}>
        <Text typo="SCD_Headline_24" color="white">
          {data?.contents}
        </Text>
      </FlexBox>
      <Spacing height={64} />
      {favorQuestionData[category][number].length >= 6 ? (
        <GridBox>
          {favorQuestionData[category][number].map((data, index) => {
            return (
              <SquareButton
                subVariant={answer === data ? 'selected' : 'default'}
                key={index}
                fullWidth={true}
                variant="medium2Square"
                style={{ height: '48px' }}
                value={data}
                onClick={(e) => handleAnswerValue(e)}
              >
                {data}
              </SquareButton>
            )
          })}
        </GridBox>
      ) : (
        <FlexBox direction="column" gap={16} fullWidth={true}>
          {favorQuestionData[category][number].map((data, index) => {
            return (
              <SquareButton
                subVariant={answer.length > 0 ? 'selected' : 'default'}
                key={index}
                fullWidth={true}
                variant="medium2Square"
                style={{ height: '48px' }}
                value={data}
                onClick={(e) => handleAnswerValue(e)}
              >
                {data}
              </SquareButton>
            )
          })}
        </FlexBox>
      )}
      <RoundButton
        style={{ position: 'absolute', bottom: '32px' }}
        variant="mediumRound"
        onClick={submitAnswer}
      >
        다음
      </RoundButton>
    </OneAnswerStepWrapper>
  )
}
export default OneAnswerStep

const OneAnswerStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0px 32px;
  height: calc(var(--vh, 1vh) * 100 - 80px);
`
const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  row-gap: 16px;
  column-gap: 26px;
`
