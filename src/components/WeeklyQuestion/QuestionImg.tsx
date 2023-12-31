import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'
import { dateState } from '@libs/store/date'
import { DailyQuestionCategoryType } from '@apis/weekly/questionType'

const QuestionImg = ({
  className,
  category,
  isToggled = true,
}: {
  className: string
  isToggled?: boolean
  category?: DailyQuestionCategoryType
}) => {
  const [date, setDate] = useRecoilState(dateState)

  const images = [
    '/images/questionBox/mon.png',
    '/images/questionBox/tue.png',
    '/images/questionBox/wed.png',
    '/images/questionBox/thur.png',
    '/images/questionBox/fri.png',
    '/images/questionBox/sat.png',
    '/images/questionBox/sun.png',
  ]

  const getTransform = (index: number) => {
    const diff = index - date.selectedDate
    const translateX = diff * 97 // 가로 이동 거리
    const translateY = diff * (diff > 0 ? -68 : 68) // 세로 이동 거리
    console.log(translateX)
    return `translate(${translateX}px, ${translateY}px)`
  }

  return (
    <ImgContainer isToggled={isToggled}>
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            alt="ImgBox"
            key={index}
            className={`image-box ${
              index === date.selectedDate
                ? 'todayImg'
                : index === date.selectedDate - 1
                ? 'prevImg'
                : index === date.selectedDate + 1
                ? 'nextImg'
                : index === date.selectedDate + 2
                ? 'nextReadyImg'
                : index === date.selectedDate - 2
                ? 'prevReadyImg'
                : 'hidden'
            }`}
            src={image}
            style={{
              transform: getTransform(index),
              transition:
                'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
              opacity:
                Math.abs(index - date.selectedDate) === 1
                  ? 0.05
                  : Math.abs(index - date.selectedDate) === 0
                  ? 1
                  : 0.05,
            }}
          />
        ))}
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
    width: 100%;
    height: 100%;
  }
  img {
    height: 100%;
    position: absolute;
  }
  .todayImg {
    top: 40%;
  }
  .hidden {
    display: none;
  }
  .prevImg {
    top: 40%;
    left: 15%;
    opacity: 5%;
  }
  .nextImg {
    top: 40%;
    right: 15%;
    opacity: 5%;
  }
  .prevReadyImg {
    left: -10%;
    opacity: 0;
  }
  .nextReadyImg {
    right: -10%;
    opacity: 0;
  }

  cursor: pointer;
`
