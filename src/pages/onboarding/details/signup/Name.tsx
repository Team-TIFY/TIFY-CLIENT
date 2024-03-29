import { ChangeEvent, useEffect, useState } from 'react'
import { ShortInput } from '@components/atoms/Input/ShortInput'
import {
  isBtnColorState,
  onboardingPageState,
  onboardingState,
} from '@libs/store/onboard'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import styled from '@emotion/styled'

type NameProps = {
  isEdit?: boolean
  value?: string
}

export function Name({ isEdit = false, value }: NameProps) {
  const [error, setError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)
  const infoPage = useRecoilValue(onboardingPageState)
  const isName = useRecoilValue(onboardingState)

  const regex = /^[ㄱ-ㅎ가-힣a-zA-Z\n\r]+$/ //정규식 - 한글과 영어만
  const handleName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!regex.test(e.target.value) && e.target.value.length > 0) {
      setError(true)
      setErrorMsg('한글과 알파벳만 사용해 주세요.')
    } else if (regex.test(e.target.value) && e.target.value.length >= 10) {
      setError(true)
      setErrorMsg('10자 이내로 부탁해요!')
    } else {
      setError(false)
      setErrorMsg('')
    }

    if (
      e.target.value.length > 0 &&
      e.target.value.length <= 10 &&
      regex.test(e.target.value)
    ) {
      setBtnColor({ ...btnColor, username: true })
    } else {
      setBtnColor({ ...btnColor, username: false })
    }
  }

  return (
    <Container>
      <ShortInput
        variant="default"
        maxText={10}
        explanation={isEdit ? '이름/닉네임' : '이름'}
        explanationPadding={4}
        defaultValue={isEdit ? value : undefined}
        placeholder={
          isEdit ? '이름/닉네임을 입력해주세요' : '이름을 입력해주세요'
        }
        error={error}
        warning={errorMsg}
        onInput={handleName}
        content="username"
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 0px 24px;
`
