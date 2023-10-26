import styled from '@emotion/styled'
import { TasteType } from '@utils/apis/favor/TasteType'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { favorQuestionData } from '@libs/store/dummy'
import { RoundButton } from '@components/atoms/RoundButton'
import { ChangeEvent, useState, useEffect } from 'react'
import { Text } from '@components/atoms/Text'
import SquareButton from '@components/atoms/SquareButton'
import { useRef } from 'react'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { useQuery } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import { theme } from '@styles/theme'

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
  const { data } = useQuery(['question', category, number], () =>
    FavorApi.GET_FAVOR_QUESTION({ category, number }),
  )
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [keyword, setKeyword] = useState<string>('')
  const [autoItems, setAutoItems] = useState<string[]>([])
  const [disabled, setDisabled] = useState<boolean>(true)
  const [answer, setAnswer] = useState<string>('')
  const [step, setStepAnswer] = useRecoilState(answerState)
  const handleSearchProduct = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setKeyword(e.target.value)
    setAnswer('')
    setDisabled(true)
    if (e.target.value === '') {
      return
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
    setNextStep()
  }

  //TODO: Debounce 훅 걸어두기
  useEffect(() => {
    if (keyword) {
      const word = favorQuestionData[category][number]
        .filter((data) => data.includes(keyword) === true)
        .slice(0, 12)
      setAutoItems(word)
    }
  }, [category, keyword, number])

  const handleAnswer = (data: string) => {
    setKeyword(data)
    setAnswer(data)
    setDisabled(false)
  }

  return (
    <SearchContainer>
      <Spacing height={20} />
      <FlexBox direction="column" gap={20}>
        <Text typo="SCD_Headline_24" color="white">
          {data?.contents.substring(0, 18)}
        </Text>
      </FlexBox>
      <Spacing height={64} />
      <SearchInput
        placeholder="검색해 주세요"
        ref={inputRef}
        value={keyword}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          handleSearchProduct(e)
        }}
        customRemoveHandler={() => {
          setKeyword('')
          setAnswer('')
          setDisabled(true)
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
                  handleAnswer(data)
                }}
              >
                {data.split(keyword)[0]}
                <span style={{ color: `${theme.palette.purple_500}` }}>
                  {keyword}
                </span>
                {data.split(keyword)[1]}
              </SquareButton>
            ))}

            <Text
              color="gray_200"
              typo="Body_14"
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              as="span"
              onClick={() => {
                setAnswer('')
                submitAnswer()
              }}
            >
              찾는 제품이 없어요. 답변 건너뛸래요.
            </Text>
          </AutoSearchWrap>
        </AutoSearchContainer>
      ) : (
        <Text
          color="gray_200"
          typo="Body_14"
          style={{
            textDecoration: 'underline',
            marginTop: '24px',
            cursor: 'pointer',
          }}
          as="span"
          onClick={() => {
            setAnswer('')
            submitAnswer()
          }}
        >
          찾는 제품이 없어요. 답변 건너뛸래요.
        </Text>
      )}
      <Spacing height={100} />
      <RoundButton
        style={{ position: 'absolute', bottom: '32px' }}
        variant="mediumRound"
        disabled={disabled}
        onClick={submitAnswer}
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
  height: 60vh;
  width: 100%;
  margin: 24px;
  padding: 0 32px;
  box-sizing: border-box;
  text-align: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 12px;
  }
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
