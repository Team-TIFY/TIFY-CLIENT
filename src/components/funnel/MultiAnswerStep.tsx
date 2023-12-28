import { TasteType } from '@utils/apis/favor/TasteType'
import { useQuery } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import styled from '@emotion/styled'
import { favorQuestionData } from '@libs/store/dummy'
import SquareButton from '@components/atoms/SquareButton'
import { RoundButton } from '@components/atoms/RoundButton'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import useStepNumberIcon from '@libs/hooks/useStepNumberIcon'
import useSnackBar from '@libs/hooks/useSnackBar'

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
  const { data } = useQuery(['question', category, number], () =>
    FavorApi.GET_FAVOR_QUESTION({ category, number }),
  )
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
          {data?.contents}
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
      <RoundButton
        style={{ position: 'absolute', bottom: '32px' }}
        variant="mediumRound"
        onClick={submitAnswer}
        disabled={disabled}
      >
        {isLastAnswer ? '완료' : '다음'}
      </RoundButton>
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
