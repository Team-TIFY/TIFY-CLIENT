import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { profileState } from '@libs/store/profile'
import { onboardingState, isBtnColorState } from '@libs/store/onboard'
import { ShortInputProps } from '@models/components/atoms/Input'
import { OnboardingType, OnboardingBtnType } from '@models/stores/onboard'
import { SHORT_INPUT_TYPE } from '@constants/atoms/input'

export const ShortInput = ({
  variant,
  maxText,
  explanation,
  explanationPadding,
  defaultValue,
  width,
  placeholder,
  onChange,
  error,
  warning,
  content,
  ...props
}: ShortInputProps) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [_, setFocus] = useState(false)
  const [info, setInfo] = useRecoilState<OnboardingType>(onboardingState)
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)
  const setProfileStateData = useSetRecoilState(profileState)

  useEffect(() => {
    if (defaultValue) {
      setInfo((prevInfo) => ({ ...prevInfo, [content]: defaultValue }))
    }
  }, [content])

  useEffect(() => {
    if (content === 'username' && info.username) {
      setInfo({ ...info, username: info.username })
      ref.current!.value = info.username
    } else if (content === 'id' && info.id) {
      setInfo({ ...info, id: info.id })
      ref.current!.value = info.id
    }
  }, [info.username, info.id])

  const textHandler = (
    e: ChangeEvent<HTMLTextAreaElement>,
    content: string,
  ) => {
    const inputText = e.target.value

    setProfileStateData((prevState) => ({
      ...prevState,
      buttonText: '확인',
    }))
    setProfileStateData((prevState) => ({ ...prevState, isEdit: true }))
    setInfo({ ...info, [content]: inputText })
  }

  const cancelClick = (content: keyof OnboardingBtnType) => {
    setInfo({ ...info, [content]: '' })
    setBtnColor({ ...btnColor, [content]: false })
  }

  const focusInput = () => {
    setFocus((prev) => !prev)
  }

  const handleEnter = (
    e: ChangeEvent<HTMLTextAreaElement>,
    content: string,
  ) => {
    const filteredText = e.target.value.replace(/[\r\n]/g, '')
    setInfo({
      ...info,
      [content]: filteredText,
    })
  }

  const handleClickTextArea = () => {
    setProfileStateData((prevState) => ({
      ...prevState,
      buttonText: '확인',
    }))
  }

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e)
    textHandler(e, content)
    handleEnter(e, content)
  }

  const handleClickCancelButton = () => {
    cancelClick(content as keyof OnboardingBtnType)
  }

  return (
    <Wrapper>
      <InstText explanationPadding={explanationPadding}>{explanation}</InstText>
      <TextAreaWrapper width={width} error={error}>
        <IDdiv variant={SHORT_INPUT_TYPE[variant].isIdInput}>@</IDdiv>
        <StyledTextArea
          ref={ref}
          value={info[content as keyof OnboardingType]}
          placeholder={placeholder}
          spellCheck="false"
          onChange={(e) => handleChangeTextArea(e)}
          onClick={handleClickTextArea}
          maxLength={maxText}
          onFocus={focusInput}
          onBlur={focusInput}
          {...props}
        />
        <CancelBtn onClick={handleClickCancelButton} />
      </TextAreaWrapper>
      {
        error && <WarningText>{warning}</WarningText> //경고 문구
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
`

const InstText = styled.div<{ explanationPadding?: number }>`
  width: fit-content;
  height: fit-content;
  padding-left: ${({ explanationPadding }) =>
    explanationPadding ? `${explanationPadding}px` : null};
  margin-bottom: 8px;
  ${theme.typo.Caption_12M};
  color: ${theme.palette.gray_300};
`

const TextAreaWrapper = styled.div<{
  error: boolean
  width: number | undefined
}>`
  border-radius: 12px;
  padding: 16px;
  background: ${theme.palette.gray_900};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 52px;
  display: flex;
  align-items: center;
  border: ${({ error }) => (error ? '2px solid' : 'none')};
  border-color: ${({ error }) =>
    error ? `${theme.palette.red_300}` : `${theme.palette.purple_300}`};

  &:focus-within {
    border: 2px solid;
    border-color: ${({ error }) =>
      error ? `${theme.palette.red_300}` : `${theme.palette.purple_300}`};
  }
`

const StyledTextArea = styled.textarea`
  width: 100%;
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

const WarningText = styled.div`
  width: 280px;
  padding: 8px 14px 0px 14px;
  color: ${theme.palette.red_500};
  ${theme.typo.Caption_12M};
`

const CancelBtn = styled.button`
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1451_3860)'%3E%3Cpath d='M12 4L4 12' stroke='%23E4E4E5' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 4L12 12' stroke='%23E4E4E5' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1451_3860'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: cover;
`

const IDdiv = styled.div<{
  variant: boolean
}>`
  display: ${({ variant }) => (variant ? 'block' : 'none')};
  margin-right: 3px;
  color: ${theme.palette.gray_100};
`
