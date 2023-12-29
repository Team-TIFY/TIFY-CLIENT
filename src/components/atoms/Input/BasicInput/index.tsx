import { ChangeEvent, useRef, useState } from 'react'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { BasicInputPropsType } from '@models/components/atoms/Input'
import { FlexBox } from '@components/layouts/FlexBox'

export const BasicInput = ({
  maxText,
  explanation,
  explanationPadding,
  placeholder,
  onChange,
  error,
  height,
  warning,
  onBlur,
  ...props
}: BasicInputPropsType) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [focus, setFocus] = useState(false)
  const [inputText, setInputText] = useState('')

  const textHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxText!) {
      setInputText(e.target.value)
    }
  }

  const focusInput = () => {
    setFocus((prev) => !prev)
  }

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e)
    textHandler(e)
  }

  const handleBlurTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onBlur?.(e)
    focusInput()
  }

  return (
    <FlexBox>
      <Wrapper>
        <InstText explanationPadding={explanationPadding}>
          {explanation}
        </InstText>
        <TextAreaWrapper height={height} error={error} focus={focus}>
          <StyledTextArea
            ref={ref}
            value={inputText}
            placeholder={placeholder}
            spellCheck="false"
            onChange={(e) => handleChangeTextArea(e)}
            maxLength={maxText}
            onFocus={focusInput}
            onBlur={(e) => handleBlurTextArea(e)}
            {...props}
          />
        </TextAreaWrapper>
        {
          error && <WarningText>{warning}</WarningText> //경고 문구
        }
      </Wrapper>
    </FlexBox>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const InstText = styled.div<{ explanationPadding?: number }>`
  margin-left: 4px;
  margin-bottom: 8px;
  color: ${theme.palette.gray_300};
  padding-left: ${({ explanationPadding }) =>
    explanationPadding ? `${explanationPadding}px` : null};
  ${theme.typo.Caption_12R};
`

const TextAreaWrapper = styled.div<{
  error: boolean
  height: number
  focus: boolean
}>`
  border-radius: 12px;
  padding: 16px;
  background: ${theme.palette.gray_900};
  height: ${({ height }) => `${height}px`};
  display: flex;
  align-items: center;
  border: 2px solid;
  border-color: ${({ error, focus }) =>
    error
      ? `${theme.palette.red_300}`
      : focus
      ? `${theme.palette.purple_300}`
      : `${theme.palette.gray_700}`};

  &:focus-within {
    border: 2px solid;
    border-color: ${({ error }) =>
      error ? `${theme.palette.red_300}` : `${theme.palette.purple_300}`};
  }
`

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background: transparent;
  overflow: hidden;
  padding: 0;
  color: ${theme.palette.white};
  ${theme.typo.Body_14};
`

const WarningText = styled.div`
  width: 280px;
  padding: 8px 14px 0px 14px;
  color: ${theme.palette.red_500};
  ${theme.typo.Caption_12M};
`
