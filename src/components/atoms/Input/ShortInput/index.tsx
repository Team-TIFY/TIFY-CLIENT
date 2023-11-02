/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'
import {
  ChangeEvent,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { theme } from '@styles/theme'
import { FlexBox } from '@components/layouts/FlexBox'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  isBtnColorState,
  onboardingState,
} from '@libs/store/onboard'
import { profileState } from '@libs/store/profile'

type InputVariant = 'default' | 'idInput'

type InputVariantType = {
  [key in InputVariant]: {
    isIdInput: boolean
  }
}

const INPUT_TYPE: InputVariantType = {
  default: {
    isIdInput: false,
  },
  idInput: {
    isIdInput: true,
  },
}

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: InputVariant
  maxText?: number
  explanation?: string
  explanationPadding?: number
  defaultValue?: string
  width: number
  placeholder?: string
  warning?: string
  error: boolean
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  content: string
}

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
}: InputProps) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [_, setFocus] = useState(false)
  const [info, setInfo] = useRecoilState(onboardingState)
  const setBtnColor = useSetRecoilState(isBtnColorState)
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

  const cancelClick = (content: string) => {
    setInfo({ ...info, [content]: '' })
    setBtnColor(false)
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

  const handleClick = () => {
    setProfileStateData((prevState) => ({
      ...prevState,
      buttonText: '확인',
    }))
  }

  return (
    <FlexBox>
      <Wrapper>
        <InstText explanationPadding={explanationPadding}>
          {explanation}
        </InstText>
        <TextAreaWrapper width={width} error={error}>
          <IDdiv variant={INPUT_TYPE[variant].isIdInput}>@</IDdiv>
          <StyledTextArea
            ref={ref}
            //value={info[content]}
            placeholder={placeholder}
            spellCheck="false"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              if (onChange) onChange(e)
              textHandler(e, content)
              handleEnter(e, content)
            }}
            onClick={handleClick}
            maxLength={maxText}
            onFocus={focusInput}
            onBlur={focusInput}
            {...props}
          />
          <CancelBtn
            onClick={() => {
              cancelClick(content)
            }}
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
  height: fit-content;
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
  width: number
}>`
  border-radius: 12px;
  padding: 16px;
  background: ${theme.palette.gray_900};
  width: ${({ width }) => `${width}px`};
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
