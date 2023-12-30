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
import React from 'react'
import { Spacing } from '@components/atoms/Spacing'
import { favorQuestionData } from '@libs/store/dummy'
import SquareButton from '@components/atoms/SquareButton'
import TextWithLineBreak from '@components/atoms/TextWithLineBreak'
import { motion } from 'framer-motion'

interface OneAnswerStepProps {
  isLastAnswer?: boolean
  category: TasteType
  number: number
  setNextStep: () => void
}

const OneAnswerStep = ({
  category,
  number,
  setNextStep,
  isLastAnswer = false,
}: OneAnswerStepProps) => {
  const {
    data = {
      favorQuestionId: 0,
      favorQuestionCategoryName: '',
      number: 0,
      contents: '',
    },
  } = useQuery(['question', category, number], () =>
    FavorApi.GET_FAVOR_QUESTION({ category, number }),
  )
  const spring = { type: 'spring', stiffness: 300, damping: 15 }
  const [answer, setAnswer] = useState<string>('')
  const [step, setStepAnswer] = useRecoilState(answerState)
  const [disabled, setDisabled] = useState<boolean>(true)
  const handleAnswerValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (answer === e.currentTarget.value) {
      setDisabled(true)
      setAnswer('')
    } else {
      setDisabled(false)
      setAnswer(e.currentTarget.value)
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
          <TextWithLineBreak data={data.contents} />
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
        </FlexBox>
      )}
      <motion.button
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        style={{ position: 'absolute', bottom: '32px' }}
      >
        <RoundButton
          variant="mediumRound"
          onClick={submitAnswer}
          disabled={disabled}
        >
          {isLastAnswer ? '완료' : '다음'}
        </RoundButton>
      </motion.button>
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
