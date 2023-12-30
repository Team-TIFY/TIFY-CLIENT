import {
  DailyQuestionCategory,
  DailyQuestionCategoryType,
} from '@utils/apis/weekly/questionType'
import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'
import { dateState } from '@libs/store/date'
import { useEffect, useState } from 'react'
import { weeklyList } from '@constants/todayList'
import { TodayKeyType } from '@models/components/atoms/DayWeek'

const QuestionImg = ({
  category,
  isToggled = true,
}: {
  category: DailyQuestionCategoryType
  isToggled?: boolean
}) => {
  const [date, setDate] = useRecoilState(dateState)
  const [day, setDay] = useState<string>('')

  const images = [
    '/images/questionBox/mon.png',
    '/images/questionBox/tue.png',
    '/images/questionBox/wed.png',
    '/images/questionBox/thur.png',
    '/images/questionBox/fri.png',
    '/images/questionBox/sat.png',
    '/images/questionBox/sun.png',
  ]

  useEffect(() => {
    getDayWeek(date.selectedDate)
  }, [date.dateString])

  const getDayWeek = (day: number) => {
    if (date.selectedDate === date.today) {
      setDay('오늘')
      return
    }
    switch (day) {
      case 0:
        setDay('월요일')
        break
      case 1:
        setDay('화요일')
        break
      case 2:
        setDay('수요일')
        break
      case 3:
        setDay('목요일')
        break
      case 4:
        setDay('금요일')
        break
      case 5:
        setDay('토요일')
        break
      case 6:
        setDay('일요일')
        break
    }
  }
  return (
    <ImgContainer isToggled={isToggled}>
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            alt="todayImg"
            key={index}
            className={`todayImg ${index == date.selectedDate ? '' : 'hidden'}`}
            src={image}
          />
        ))}
        <img
          className="prevImg"
          src={
            images[
              date.selectedDate === 0
                ? images.length - 1
                : date.selectedDate - 1
            ]
          }
        />
        <img
          className="nextImg"
          src={images[(date.selectedDate + 1) % images.length]}
        />
      </div>
    </ImgContainer>
  )
}
export default QuestionImg

const ImgContainer = styled.div<{ isToggled: boolean }>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  width: 100%;
  height: 230px;
  .image-slider {
    position: relative;
    display: flex;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    height: 100%;
  }
  img {
    height: 100%;
    position: absolute;
  }
  .prevImg,
  .nextImg {
    position: absolute;
    top: 0;
    opacity: 0.5;
    transition:
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
  }
  .todayImg {
    top: 40%;
  }
  .hidden {
    display: none;
  }
  .prevImg {
    left: 10%;
    opacity: 5%;
    transform: translate(-97px, 0);
  }
  .nextImg {
    right: 10%;
    opacity: 5%;
    transform: translate(97px, 0);
  }

  cursor: pointer;
`
