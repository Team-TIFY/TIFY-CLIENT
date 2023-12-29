import { ChangeEvent, useState, forwardRef } from 'react'
import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { SearchInputPropsType } from '@models/components/atoms/Input'
import { SearchIcon } from '@assets/icons/SearchIcon'
import {
  isCancelState,
  isSearchActiveBtn,
  isSearchInputState,
} from '@libs/store/onboard'

export const SearchInput = forwardRef<
  HTMLTextAreaElement,
  SearchInputPropsType
>(function SearchInput(
  {
    width,
    placeholder,
    onChange,
    onClick,
    customRemoveHandler,
    ...props
  }: SearchInputPropsType,
  inputRef,
) {
  const [, setFocus] = useState(false)
  const [, setBtnColor] = useState(false)
  const [content, setContent] = useState<string>('')
  const [, setSearchText] = useRecoilState(isSearchInputState)
  const [, setSelectedIndex] = useRecoilState(isSearchActiveBtn)
  const [, setIsCancel] = useRecoilState(isCancelState)

  const textHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value

    setContent(inputText)
    setIsCancel(false)
  }

  const cancelClick = () => {
    customRemoveHandler?.()

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

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e)
    textHandler(e)
    handleEnter(e)
  }

  return (
    <Wrapper>
      <TextAreaWrapper width={width}>
        <SearchIcon />
        <StyledTextArea
          width={width}
          ref={inputRef}
          value={content}
          placeholder={placeholder}
          spellCheck="false"
          onClick={onClick}
          onChange={(e) => handleChangeTextArea(e)}
          onFocus={inputFocus}
          onBlur={inputFocus}
          {...props}
        />
        <CancelBtn onClick={cancelClick} />
      </TextAreaWrapper>
    </Wrapper>
  )
})

const Wrapper = styled.div``

const TextAreaWrapper = styled.div<{
  width?: number
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

const StyledTextArea = styled.textarea<{
  width?: number
}>`
  width: ${({ width }) => (width ? '254px' : '100%')};
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
