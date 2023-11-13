import { ShortInput } from '@components/atoms/Input/ShortInput'
import { authState } from '@libs/store/auth'
import { isBtnColorState } from '@libs/store/onboard'
import { useQuery } from '@tanstack/react-query'
import { OnboardingApi } from '@utils/apis/onboarding/OnboardingApi'
import { ChangeEvent, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

type UserIdPropsType = {
  isEdit?: boolean
  value: string
}

export const UserId = ({ isEdit = false, value }: UserIdPropsType) => {
  const [error, setError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)
  const auth = useRecoilValue(authState)
  const [inputValue, setInputValue] = useState<string>('')

  const handleName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)

    const regex = /^[a-zA-Z0-9.-_-\n\r]+$/ //정규식

    if (!regex.test(e.target.value) && e.target.value.length > 0) {
      setError(true)
      setErrorMsg(
        '알파벳 (a-z, A-Z), 숫자, 밑줄 (-, _) 및 마침표만 사용해 주세요.',
      )
    } else if (regex.test(e.target.value) && e.target.value.length >= 15) {
      setError(true)
      setErrorMsg('15자 이내로 부탁해요!')
    } else {
      setError(false)
      setErrorMsg('')
    }

    if (
      e.target.value.length > 0 &&
      e.target.value.length < 15 &&
      regex.test(e.target.value)
    ) {
      setBtnColor(true)
    } else {
      setBtnColor(false)
    }
  }

  const { data: isIdAvailable } = useQuery(
    //중복확인
    ['userIdCheck', inputValue],
    () => OnboardingApi.GET_USERID_CHECK(inputValue),
  )

  const handleBlur = () => {
    if (inputValue !== '') {
      if (auth.userProfile.userId === inputValue) {
        return
      }

      if (isIdAvailable === false) {
        setErrorMsg('다른 사용자가 사용하고 있어요.')
        setError(true)
        setBtnColor(false)
      }
    }
  }

  return (
    <>
      <ShortInput
        variant="idInput"
        maxText={15}
        explanation={isEdit ? '아이디' : '사용자 ID'}
        explanationPadding={4}
        defaultValue={isEdit ? value : undefined}
        width={312}
        placeholder={isEdit ? '아이디를 입력해주세요' : 'ID를 입력해주세요'}
        error={error}
        warning={errorMsg}
        onChange={handleName}
        onBlur={handleBlur}
        content="id"
      />
    </>
  )
}
