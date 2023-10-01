import styled from '@emotion/styled'
import { TasteType } from '@utils/apis/favor/TasteType'
import { LongInput } from '@components/atoms/Input/LongInput'
interface SearchAnswerStepProps {
  category: TasteType
  number: number
  setNextStep: () => void
}

const SearchAnswerStep = ({
  category,
  number,
  setNextStep,
}: SearchAnswerStepProps) => {
  return (
    <>
      <LongInput />
    </>
  )
}

export default SearchAnswerStep

const SearchContainer = styled.div`
  width: 40px;
`
