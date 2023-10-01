import styled from '@emotion/styled'
import { TasteType } from '@utils/apis/favor/TasteType'
import { Input } from '@components/atoms/Input'
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
      <Input />
    </>
  )
}

export default SearchAnswerStep

const SearchContainer = styled.div`
  width: 40px;
`
