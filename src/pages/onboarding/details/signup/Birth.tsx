import styled from '@emotion/styled';
import { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { theme } from '@styles/theme';
import { isBtnColorState, onboardingState } from "@libs/store/onboard";
import { useRecoilState } from "recoil";
import { ko } from "date-fns/locale";
import { FlexBox } from "@components/layouts/FlexBox";

export function Birth() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [info, setInfo] = useRecoilState(onboardingState);
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);

    if (date) {
      const formattedDate = formatDateToString(date);
      setInfo({
        ...info,
        birth: formattedDate,
      });
    } 

    setBtnColor(true);
  };

  const formatDateToString = (date: Date) => {
    return date.toLocaleDateString(); // 날짜를 문자열로 변환
  };


  return (
    <FlexBox>
      <BirthDiv>
        <SmallText>
          생년월일
        </SmallText>
          <CustomDatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy.MM.dd"
            minDate={new Date('2009-01-01')}
            locale={ko}
          shouldCloseOnSelect />   
        </BirthDiv>       
    </FlexBox>
    )
}


const BirthDiv = styled.div`
  width: 312px;
`

const SmallText = styled.div`
  ${theme.typo.Caption_12M};
  color: ${theme.palette.gray_300};
  margin-bottom: 8px;
`

const CustomDatePicker = styled(DatePicker)`
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
  &:focus{
  border: 2px solid;
  border-color: ${theme.palette.purple_300};
  }
`