import { SmallDownChev } from '@assets/icons/SmallDownChev'
import { UpChevron } from '@assets/icons/UpChevron'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useState, useRef, useEffect } from 'react'

const WriteForCustomer = () => {
  const Options = [
    { key: 0, value: '일반 문의' },
    { key: 1, value: '기능 오류' },
    { key: 2, value: '브랜드/상품 제안' },
    { key: 3, value: '질문 제안' },
    { key: 4, value: '게시물/사용자 신고' },
    { key: 5, value: '사용법 문의' },
    { key: 6, value: '기타 문의' },
  ]

  const [currentValue, setCurrentValue] = useState(Options[0].value)
  // 여기에 문의 유형 저장 (ex. 일반문의...)

  const [showOptions, setShowOptions] = useState(false)
  const selectRef = useRef(null)

  useEffect(() => {
    //Selectbox 밖 선택 시 selectbox toggle 닫기
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !(selectRef.current as any).contains(event.target)
      ) {
        setShowOptions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleOptions = () => {
    //selectBox클릭 시 toggle 설정
    setShowOptions((prev) => !prev)
  }

  const handleOptionClick = (value: string) => {
    setCurrentValue(value)
    toggleOptions()
  } //option 클릭 시 selectbox 닫기

  return (
    <Wrapper>
      <FlexBox>
        <SelectBox ref={selectRef} onClick={toggleOptions}>
          <Label>{currentValue}</Label>
          {showOptions ? <UpChevron /> : <SmallDownChev />}
          <SelectOptions show={showOptions}>
            {Options.map((data) => (
              <Option
                key={data.key}
                value={data.value}
                onClick={() => {
                  toggleOptions()
                  handleOptionClick(data.value)
                }}
              >
                {data.value}
              </Option>
            ))}
          </SelectOptions>
        </SelectBox>
      </FlexBox>
      <Title>
        <Text children="제목" typo="Caption_12R" color="gray_300" />
      </Title>
    </Wrapper>
  )
}

export default WriteForCustomer

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 24px 0px 24px;
`

const SelectBox = styled.div`
  //디자인 더 나오면 custom 필요
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  background-color: ${theme.palette.gray_900};
  border: 2px solid ${theme.palette.gray_700};
`

const Label = styled.label`
  font-size: 14px;
  text-align: center;
  margin-left: 4px;
  color: ${theme.palette.white};
  ${theme.typo.Body_14};
`

const SelectOptions = styled.ul<{
  show: boolean
}>`
  position: absolute;
  list-style: none;
  top: 55px;
  left: 0;
  width: 100%;
  overflow: scroll; //ㅅ크롤?
  height: 230px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding: 0;
  border-radius: 8px;
  background-color: ${theme.palette.gray_900};
  color: ${theme.palette.white};
  border: 2px solid ${theme.palette.gray_700};
`

const Option = styled.li`
  font-size: 14px;
  padding: 16px;
  height: 20px;
  display: flex;
`
const Title = styled.div`
  margin-top: 20px;
`
