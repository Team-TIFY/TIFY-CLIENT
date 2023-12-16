import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { theme } from '@styles/theme'
import { isBtnColorState, onboardingState } from '@libs/store/onboard'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ko } from 'date-fns/locale'
import { FlexBox } from '@components/layouts/FlexBox'
import useGetDate from '@libs/hooks/useGetDate'
import { profileState } from '@libs/store/profile'
import { useNavigate } from 'react-router-dom'

export function Birth({
  value,
  textPadding,
}: {
  value?: string
  textPadding?: number
}) {
  const { getFormattedDate, parseDate } = useGetDate()
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(getFormattedDate(value)) : new Date('2000-01-01'),
  )
  const [info, setInfo] = useRecoilState(onboardingState)
  const [btnColor, setBtnColor] = useState<boolean>(false)
  const setProfileStateData = useSetRecoilState(profileState)
  const handleDateChange = (date: Date | null) => {
    setProfileStateData((prevState) => ({ ...prevState, isEdit: true }))
    setProfileStateData((prevState) => ({
      ...prevState,
      buttonText: '확인',
    }))
    setSelectedDate(date)

    if (date) {
      const formattedDate = parseDate(date)
      setInfo({
        ...info,
        birth: formattedDate,
      })
    }

    setBtnColor(true)
  }

  useEffect(() => {
    if (info.birth) {
      setSelectedDate(new Date(info.birth))
    }
  }, [value, info.birth])

  return (
    <BirthDiv>
      <SmallText textPadding={textPadding}>생년월일</SmallText>
      <CustomDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        maxDate={new Date('2009-01-01')}
        locale={ko}
        shouldCloseOnSelect
      />
    </BirthDiv>
  )
}

const BirthDiv = styled.div`
  margin: 0px 24px;
  display: block;
`

const SmallText = styled.div<{ textPadding?: number }>`
  ${theme.typo.Caption_12M};
  color: ${theme.palette.gray_300};
  padding-left: ${({ textPadding }) =>
    textPadding ? `${textPadding}px` : null};
  margin-bottom: 8px;
`

const CustomDatePicker = styled(ReactDatePicker)`
  width: 100%;
  border: none;
  border-radius: 12px;
  color: ${theme.palette.white};
  height: 52px;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${theme.palette.gray_900};
  ${theme.typo.Body_14};

  &:focus {
    border: 2px solid;
    border-color: ${theme.palette.purple_300};
  }

  .react-datepicker-wrapper {
    display: block !important;
  }
`
