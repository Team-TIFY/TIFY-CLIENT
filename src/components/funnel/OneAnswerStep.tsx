import { TasteType } from '@utils/apis/favor/TasteType'
import { useQuery } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { RoundButton } from '@components/atoms/RoundButton'
import styled from '@emotion/styled'
interface OneAnswerStepProps {
  category: TasteType
  number: number
  setStep: () => void
}

const OneAnswerStep = ({ category, number, setStep }: OneAnswerStepProps) => {
  const { data } = useQuery(['question', category, number], () =>
    FavorApi.GET_FAVOR_QUESTION({ category, number }),
  )
  return (
    <OneAnswerStepWrapper>
      <FlexBox direction="column" gap={20}>
        <Text typo="SCD_Headline_24" color="white">
          {data?.contents}
        </Text>
      </FlexBox>
      <RoundButton
        style={{ position: 'absolute', bottom: '32px' }}
        variant="mediumRound"
        onClick={setStep}
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
