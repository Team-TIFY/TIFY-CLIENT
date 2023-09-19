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
interface MultiAnswerStepProps {
  category: TasteType
  number: number
  max: number
  setStep?: () => void
}

const MultiAnswerStep = ({
  category,
  number,
  max,
  setStep,
}: MultiAnswerStepProps) => {
  const { data } = useQuery(['question', category, number], () =>
    FavorApi.GET_FAVOR_QUESTION({ category, number }),
  )
  return (
    <MultiAnswerStepWrapper>
      <FlexBox direction="column" gap={10}>
        <Spacing height={32} />
        <Text typo="SCD_Headline_24" color="white">
          {data?.contents}
        </Text>
        <Text typo="Caption_12R" color="gray_200">
          최대 {max}개까지 선택할 수 있어요
        </Text>
      </FlexBox>
      <Spacing height={64} />
      <FlexBox direction="column" gap={16} fullWidth={true}>
        {favorQuestionData[category][number].map((data, index) => {
          return (
            <SquareButton
              key={index}
              fullWidth={true}
              variant="medium2Square"
              style={{ height: '48px' }}
            >
              {data}
            </SquareButton>
          )
        })}
      </FlexBox>
      <RoundButton
        style={{ position: 'absolute', bottom: '32px' }}
        variant="mediumRound"
        onClick={setStep}
      >
        다음
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
