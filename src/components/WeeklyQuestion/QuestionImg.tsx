import styled from '@emotion/styled'
import {
  DailyQuestionCategory,
  DailyQuestionCategoryType,
} from '@utils/apis/weekly/questionType'
const QuestionImg = ({
  category,
  isToggled = true,
}: {
  isToggled?: boolean
  category: DailyQuestionCategoryType
}) => {
  return (
    <ImgContainer isToggled={isToggled}>
      <img src={DailyQuestionCategory[category]} />
    </ImgContainer>
  )
}
export default QuestionImg

const ImgContainer = styled.div<{ isToggled: boolean }>`
  display: ${({ isToggled }) => (isToggled ? 'flex' : 'none')};
  justify-content: center;
  width: 100%;
  height: 242px;
  img {
    height: 100%;
  }
  cursor: pointer;
`
