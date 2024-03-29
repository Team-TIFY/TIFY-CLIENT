import { TasteType } from '@models/apis/TasteType'
import { useQuery } from '@tanstack/react-query'
import { FavorApi } from '@apis/FavorApi'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import styled from '@emotion/styled'
import { favorQuestionData } from '@constants/favorQuestion/favorQuestionData'
import SquareButton from '@components/atoms/SquareButton'
import { RoundButton } from '@components/atoms/RoundButton'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import useStepNumberIcon from '@libs/hooks/useStepNumberIcon'
import useSnackBar from '@libs/hooks/useSnackBar'
import TextWithLineBreak from '@components/atoms/TextWithLineBreak'
import { motion } from 'framer-motion'

interface MultiAnswerStepProps {
  isLastAnswer?: boolean
  category: TasteType
  number: number
  max: number
  setNextStep: () => void
}

const MultiAnswerStep = ({
  category,
  number,
  max,
  setNextStep,
  isLastAnswer = false,
}: MultiAnswerStepProps) => {
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
  const { setSnackBar } = useSnackBar()
  const [setStepNumberIcon] = useStepNumberIcon()
  const [step, setStepAnswer] = useRecoilState(answerState)
  const [answer, setAnswer] = useState<string[]>([])
  const [toggleState, setToggleState] = useState<boolean[]>(
    Array.from(
      { length: favorQuestionData[category][number].length },
      () => false,
    ),
  )
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    const answerResult = toggleState.filter((data) => data === true)
    if (answerResult.length === 0) setDisabled(true)
    else {
      setDisabled(false)
    }
  }, [toggleState])

  const submitAnswer = () => {
    setStepAnswer({
      ...step,
      favorAnswerDtos: [
        ...step.favorAnswerDtos,
        {
          num: number,
          answer: answer.join(),
        },
      ],
    })
  }

  useEffect(() => {
    if (number === step.favorAnswerDtos.at(-1)?.num) setNextStep()
  }, [step])

  const handleAnswerValue = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (toggleState.filter((_, i) => index === i)[0]) {
      const deleteAnswer = answer.filter(
        (data) => data !== e.currentTarget.value,
      )
      setAnswer([...deleteAnswer])
      toggleState.splice(index, 1, false)
      setToggleState([...toggleState])
    } else {
      if (answer.length === max) {
        setSnackBar({
          comment: `최대 ${max}개까지 선택할 수 있어요`,
          type: 'error',
        })
        return
      }
      setAnswer([...answer, e.currentTarget.value])
      toggleState.splice(index, 1, true)
      setToggleState([...toggleState])
    }
  }

  return (
    <MultiAnswerStepWrapper>
      <FlexBox direction="column" gap={10}>
        <Spacing height={32} />
        <Text
          typo="SCD_Headline_24"
          color="white"
          style={{ whiteSpace: 'pre' }}
        >
          <TextWithLineBreak data={data.contents} />
        </Text>
        <Text typo="Caption_12R" color="gray_200">
          최대 {max}개까지 선택할 수 있어요
        </Text>
      </FlexBox>
      <Spacing height={64} />
      {favorQuestionData[category][number].length >= 6 ? (
        <GridBox>
          {favorQuestionData[category][number].map((data, index) => {
            return (
              <SquareButton
                subVariant={toggleState[index] ? 'selectedMultiple' : 'default'}
                key={index}
                fullWidth={true}
                selectedCount={setStepNumberIcon(answer.indexOf(data) + 1)}
                variant="medium2Square"
                style={{ height: '48px' }}
                value={data}
                onClick={(e) => handleAnswerValue(e, index)}
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
                subVariant={toggleState[index] ? 'selectedMultiple' : 'default'}
                key={index}
                fullWidth={true}
                selectedCount={setStepNumberIcon(answer.indexOf(data) + 1)}
                variant="medium2Square"
                style={{ height: '48px' }}
                value={data}
                onClick={(e) => handleAnswerValue(e, index)}
              >
                {data}
              </SquareButton>
            )
          })}
        </FlexBox>
      )}
      <motion.button
        style={{ position: 'absolute', bottom: '32px' }}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      >
        <RoundButton
          variant="mediumRound"
          onClick={submitAnswer}
          disabled={disabled}
        >
          {isLastAnswer ? '완료' : '다음'}
        </RoundButton>
      </motion.button>
    </MultiAnswerStepWrapper>
  )
}
export default MultiAnswerStep

const MultiAnswerStepWrapper = styled.div`
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
  column-gap: 16px;
`
