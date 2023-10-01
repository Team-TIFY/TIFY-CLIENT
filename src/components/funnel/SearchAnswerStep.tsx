import styled from '@emotion/styled'
import { TasteType } from '@utils/apis/favor/TasteType'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { useDebounce } from '@libs/hooks/useDebounce'
import { favorQuestionData } from '@libs/store/dummy'
import { RoundButton } from '@components/atoms/RoundButton'
import { useCallback, ChangeEvent, useState, useEffect } from 'react'
import { Text } from '@components/atoms/Text'
import SquareButton from '@components/atoms/SquareButton'
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
  const [keyword, setKeyword] = useState<string>('')
  const [autoItems, setAutoItems] = useState<string[]>([])
  const debouncedValue = useDebounce(keyword, 200)
  const handleSearchProduct = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setKeyword(e.target.value)
      if (e.target.value === '') {
        return
      }
      if (debouncedValue) {
        console.log(debouncedValue)
        setKeyword(e.target.value)
      }
    },
    [debouncedValue],
  )
  //디바운스 어떻게 걸 건지?
  useEffect(() => {
    console.log(keyword)
    if (keyword) {
      const word = favorQuestionData[category][number]
        .filter((data) => data.includes(keyword) === true)
        .slice(0, 10)
      console.log(word)
      setAutoItems(word)
    }
  }, [category, keyword, number])

  return (
    <SearchContainer>
      <SearchInput
        placeholder="검색해 주세요"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          handleSearchProduct(e)
        }}
      />
      {autoItems.length > 0 && keyword ? (
        <AutoSearchContainer>
          <AutoSearchWrap>
            {autoItems.map((data, index) => (
              <SquareButton
                variant="medium2Square"
                fullWidth={true}
                style={{ height: '48px' }}
                key={index}
                onClick={() => {
                  setKeyword(data)
                }}
              >
                {data}
              </SquareButton>
            ))}
          </AutoSearchWrap>
          <Text
            color="gray_200"
            typo="Body_14"
            style={{ textDecoration: 'underline' }}
            as="span"
          >
            찾는 제품이 없어요. 답변 건너뛸래요.
          </Text>
        </AutoSearchContainer>
      ) : (
        <Text
          color="gray_200"
          typo="Body_14"
          style={{ textDecoration: 'underline' }}
          as="span"
        >
          찾는 제품이 없어요. 답변 건너뛸래요.
        </Text>
      )}
      <RoundButton
        style={{ position: 'absolute', bottom: '32px' }}
        variant="mediumRound"
      >
        다음
      </RoundButton>
    </SearchContainer>
  )
}

export default SearchAnswerStep

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100 - 80px);
`
const AutoSearchContainer = styled.div`
  z-index: 3;
  height: 50vh;
  width: 100%;
  position: absolute;
  top: 100px;
  border: 2px solid;
  padding: 32px;
  text-align: center;
`

const AutoSearchWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const AutoSearchData = styled.li`
  padding: 10px 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
`
