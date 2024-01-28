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
import TextWithLineBreak from '@components/atoms/TextWithLineBreak'
import { motion } from 'framer-motion'

interface SearchAnswerStepProps {
  category: TasteType
  isLastAnswer?: boolean
  number: number
  setNextStep: () => void
}

const SearchAnswerStep = ({
  category,
  number,
  setNextStep,
  isLastAnswer = false,
}: SearchAnswerStepProps) => {
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
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [keyword, setKeyword] = useState<string>('')
  const [isFirst, setFirst] = useState<boolean>(true)
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
  }

  useEffect(() => {
    if (number === step.favorAnswerDtos.at(-1)?.num) setNextStep()
  }, [step])

  useEffect(() => {
    setAutoItems(favorQuestionData[category][number])
  }, [])

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
      <div style={{ flexShrink: 0 }}>
        <Spacing height={32} />
        <FlexBox direction="column" gap={20}>
          <Text typo="SCD_Headline_24" color="white">
            <TextWithLineBreak data={data.contents} />
          </Text>
        </FlexBox>
        <Spacing height={64} />
        <FlexBox>
          <SearchInput
            width={328}
            placeholder="검색해 주세요"
            ref={inputRef}
            value={keyword}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              handleSearchProduct(e)
              setFirst(false)
            }}
            customRemoveHandler={() => {
              setKeyword('')
              setAnswer('')
              setDisabled(true)
            }}
          />
        </FlexBox>
      </div>

      {autoItems.length > 0 && keyword ? (
        <AutoSearchContainer>
          <AutoSearchWrap>
            {autoItems.map((data, index) => (
              <SquareButton
                subVariant={answer === data ? 'selected' : 'default'}
                variant="medium2Square"
                fullWidth={true}
                style={{ height: '48px' }}
                key={index}
                onClick={() => {
                  handleAnswer(data)
                }}
              >
                <div
                  style={{
                    width: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {data.split(keyword)[0]}
                  <span style={{ color: `${theme.palette.purple_500}` }}>
                    {keyword}
                  </span>
                  {data.split(keyword)[1]}
                </div>
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
      ) : keyword.length === 0 ? (
        <AutoSearchContainer>
          <AutoSearchWrap>
            {autoItems.map((data, index) => (
              <SquareButton
                subVariant={answer === data ? 'selected' : 'default'}
                variant="medium2Square"
                fullWidth={true}
                style={{ height: '48px' }}
                key={index}
                onClick={() => {
                  handleAnswer(data)
                }}
              >
                <div
                  style={{
                    width: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {data}
                </div>
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
      <motion.button
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        style={{ position: 'absolute', bottom: '32px' }}
      >
        <RoundButton
          variant="mediumRound"
          disabled={disabled}
          onClick={submitAnswer}
        >
          {isLastAnswer ? '완료' : '다음'}
        </RoundButton>
      </motion.button>
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
