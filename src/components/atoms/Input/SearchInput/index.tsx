import styled from '@emotion/styled'
import { ChangeEvent, TextareaHTMLAttributes, useRef, useState } from 'react'
import { theme } from '@styles/theme'
import { FlexBox } from '@components/layouts/FlexBox'
import { SearchIcon } from '@assets/icons/SearchIcon'
import { useRecoilState } from 'recoil'
import {
  isBtnColorState,
  isCancelState,
  isSearchActiveBtn,
  isSearchInputState,
} from '@libs/store/onboard'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: number
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const SearchInput = ({
  width,
  placeholder,
  onChange,
  ...props
}: InputProps) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [focus, setFocus] = useState(false)
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)
  const [content, setContent] = useState<string>('')
  const [searchText, setSearchText] = useRecoilState(isSearchInputState)
  const [selectedIndex, setSelectedIndex] = useRecoilState(isSearchActiveBtn)
  const [isCancel, setIsCancel] = useRecoilState(isCancelState)

  const textHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value
    setContent(inputText)
    setIsCancel(false)
  }

  const cancelClick = () => {
    setContent('')
    setBtnColor(false)
    setSearchText('')
    setSelectedIndex(-1)
    setIsCancel(true)
  }

  const inputFocus = () => {
    setFocus((prev) => !prev)
  }

  const handleEnter = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const filteredText = e.target.value.replace(/[\r\n]/g, '')
    setContent(filteredText)
  }

  return (
    <FlexBox>
      <Wrapper>
        <TextAreaWrapper width={width}>
          <SearchIcon />
          <StyledTextArea
            ref={ref}
            value={content}
            placeholder={placeholder}
            spellCheck="false"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              onChange(e)
              textHandler(e)
              handleEnter(e)
            }}
            onFocus={inputFocus}
            onBlur={inputFocus}
            {...props}
          />
          <CancelBtn
            onClick={() => {
              cancelClick()
            }}
          />
        </TextAreaWrapper>
      </Wrapper>
    </FlexBox>
  )
}

const Wrapper = styled.div``

const TextAreaWrapper = styled.div<{
  width: number | undefined
}>`
  border-radius: 12px;
  padding: 14px;
  background: ${theme.palette.gray_900};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  align-items: center;

  &:focus-within {
    border: 2px solid;
    border-color: ${theme.palette.purple_300};
  }
`

const StyledTextArea = styled.textarea`
  width: 254px;
  max-height: 20px;
  border: none;
  resize: none;
  background: transparent;
  padding: 0;
  margin-right: 12px;
  color: ${theme.palette.white};
  ${theme.typo.Body_14};
  overflow: hidden;
  outline: none;
`

const CancelBtn = styled.button`
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1451_3860)'%3E%3Cpath d='M12 4L4 12' stroke='%23E4E4E5' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 4L12 12' stroke='%23E4E4E5' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1451_3860'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: cover;
`
