import styled from '@emotion/styled'
import React, { useEffect, useState, forwardRef } from 'react'
import { useRecoilState } from 'recoil'

import { theme } from '@styles/theme'
import { authState } from '@libs/store/auth'
import { LongInputVariant, PropsType } from '@models/components/atoms/Input'
import { LONG_INPUT_TYPE } from '@constants/atoms/input'

export const LongInput = forwardRef<HTMLTextAreaElement, PropsType>(
  function LongInput(
    {
      variant = 'default',
      explanation,
      fullWidth = false,
      value,
      content,
      customEvent,
      onClick,
      ...props
    }: PropsType,
    inputRef,
  ) {
    const [line, setLine] = useState(value ? value : '')
    const [count, setCount] = useState(true) //2줄 넘지 않으면 true
    const [auth, setAuth] = useRecoilState(authState)

    useEffect(() => {
      value && setLine(value as string)
    }, [value])

    const handleResizeHeight = () => {
      //줄 바뀌면 자동 높이 조절
      if (inputRef && typeof inputRef !== 'function') {
        inputRef.current && (inputRef.current.style.height = '0px')
        inputRef.current &&
          (inputRef.current.style.height = inputRef.current.scrollHeight + 'px')
      }
    }

    const countLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      //입력 줄 수 제한
      const textValue = e.target.value
      if (customEvent) customEvent(e)
      if (inputRef && typeof inputRef !== 'function') {
        const textHeight = inputRef.current && inputRef.current.scrollHeight
        let maxNum = 0
        for (let i = 0; i < textValue.length; i++) {
          maxNum++
        }

        if (textHeight && textHeight == 40) {
          setLine(textValue.substring(0, maxNum)) //2줄 제한(넘으면 입력 x)
          setCount(true)
        } else if (textHeight && textHeight < 40) {
          setLine(textValue)
          setCount(true)
        } else if (textHeight && textHeight > 40) {
          setCount(false)
        }

        if (content) {
          setAuth({
            ...auth,
            userProfile: {
              ...auth.userProfile,
              [content]: line,
            },
          })
        }
      }
    }

    return (
      <Wrapper>
        <InstText variant={variant}>{explanation}</InstText>
        <TextAreaWrapper fullWidth={fullWidth} count={count}>
          <StyledTextArea
            rows={1}
            value={line}
            ref={inputRef}
            placeholder="답변을 입력해 주세요."
            spellCheck="false"
            onInput={handleResizeHeight}
            onChange={countLength}
            onClick={onClick}
            {...props}
          />
        </TextAreaWrapper>
        {
          !count && <WarningText>2줄 이내로 부탁해요!</WarningText> //2줄 초과 입력 시 경고 문구
        }
      </Wrapper>
    )
  },
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0px 24px;
`

const InstText = styled.div<{
  variant: LongInputVariant
}>`
  display: ${({ variant }) => LONG_INPUT_TYPE[variant].display};
  text-align: center;
  width: 280px;
  height: 20px;
  margin-bottom: 8px;
  ${theme.typo.Caption_12M};
  color: ${theme.palette.gray_200};
`

const TextAreaWrapper = styled.div<{
  count: boolean
  fullWidth: boolean
}>`
  border-radius: 12px;
  padding: 16px;
  background: ${theme.palette.gray_900};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '312px')};
  display: flex;
  align-items: center;
  &:focus-within {
    border: 2px solid;
    border-color: ${(props) =>
      props.count ? `${theme.palette.purple_300}` : `${theme.palette.red_300}`};
  }
`

const StyledTextArea = styled.textarea`
  width: 100%;
  max-height: 40px;
  border: none;
  resize: none;
  background: transparent;
  padding: 0;
  color: ${theme.palette.white};
  ${theme.typo.Body_14};
  overflow: hidden;
  outline: none;
`

const WarningText = styled.div`
  width: 280px;
  height: 20px;
  padding: 8px 14px;
  color: ${theme.palette.red_500};
  ${theme.typo.Caption_12M};
`
