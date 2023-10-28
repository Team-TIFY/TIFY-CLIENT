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

export function Birth({
  value,
  textPadding,
}: {
  value: string
  textPadding?: number
}) {
  const { getFormattedDate, parseDate } = useGetDate()

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(getFormattedDate(value)) : new Date('2000-06-15'),
  )
  const [info, setInfo] = useRecoilState(onboardingState)
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)
  const setProfileStateData = useSetRecoilState(profileState)

  const handleDateChange = (date: Date | null) => {
    setProfileStateData((prevState) => ({ ...prevState, isEdit: true }))
    setSelectedDate(date)

    if (date) {
      const formattedDate = parseDate(date)
      setInfo({
        ...info,
        birth: formattedDate,
      })
      console.log(formattedDate)
    }

    setBtnColor(true)
  }

  useEffect(() => {
    if (info.birth) {
      setSelectedDate(new Date(info.birth))
    }
  }, [value, info.birth])

  return (
    <FlexBox>
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
    </FlexBox>
  )
}

const BirthDiv = styled.div`
  width: 312px;
`

const SmallText = styled.div<{ textPadding?: number }>`
  ${theme.typo.Caption_12M};
  color: ${theme.palette.gray_300};
  padding-left: ${({ textPadding }) =>
    textPadding ? `${textPadding}px` : null};
  margin-bottom: 8px;
`

const CustomDatePicker = styled(ReactDatePicker)`
  display: flex;
  width: 280px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.gray_900};
  border: none;
  border-radius: 12px;
  color: ${theme.palette.white};
  height: 20px;
  padding: 16px;
  ${theme.typo.Body_14};
  &:focus {
    border: 2px solid;
    border-color: ${theme.palette.purple_300};
  }
`
