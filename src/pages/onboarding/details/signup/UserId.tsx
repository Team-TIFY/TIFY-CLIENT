import { ShortInput } from '@components/atoms/Input/ShortInput'
import styled from '@emotion/styled'
import { authState } from '@libs/store/auth'
import { isBtnColorState } from '@libs/store/onboard'
import { OnboardingApi } from '@apis/OnboardingApi'
import { ChangeEvent, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

type UserIdPropsType = {
  isEdit?: boolean
  value?: string
}

export const UserId = ({ isEdit = false, value }: UserIdPropsType) => {
  const [error, setError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)
  const auth = useRecoilValue(authState)
  const [inputValue, setInputValue] = useState<string>('')

  const regex = /^[a-zA-Z0-9_.-]+$/
  const handleName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newInputValue = e.target.value

    setInputValue(newInputValue)

    if (!regex.test(newInputValue) && newInputValue.length > 0) {
      setError(true)
      setErrorMsg(
        '알파벳 (a-z, A-Z), 숫자, 밑줄 (-, _) 및 마침표만 사용해 주세요.',
      )
    } else if (regex.test(newInputValue) && newInputValue.length >= 15) {
      setError(true)
      setErrorMsg('15자 이내로 부탁해요!')
    } else {
      setError(false)
      setErrorMsg('')
    }

    if (
      newInputValue.length > 0 &&
      newInputValue.length < 15 &&
      regex.test(newInputValue)
    ) {
      setBtnColor({ ...btnColor, id: true })
    } else {
      setBtnColor({ ...btnColor, id: false })
    }

    // 중복 확인
    checkIdAvailability(newInputValue)
  }

  const checkIdAvailability = (newInputValue: string) => {
    if (newInputValue !== '') {
      if (auth.userProfile.userId === newInputValue) {
        return
      }

      OnboardingApi.GET_USERID_CHECK(newInputValue).then((isAvailable) => {
        if (isAvailable === false) {
          setErrorMsg('다른 사용자가 사용하고 있어요.')
          setError(true)
          setBtnColor({ ...btnColor, id: false })
        }
      })
    }
  }

  return (
    <Container>
      <ShortInput
        variant="idInput"
        maxText={15}
        explanation={isEdit ? '아이디' : '사용자 ID'}
        explanationPadding={4}
        defaultValue={isEdit ? value : undefined}
        placeholder={isEdit ? '아이디를 입력해주세요' : 'ID를 입력해주세요'}
        error={error}
        warning={errorMsg}
        onInput={handleName}
        content="id"
      />
    </Container>
  )
}
const Container = styled.div`
  margin: 0px 24px;
`
