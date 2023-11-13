import {
  DailyQuestionCategory,
  DailyQuestionCategoryType,
} from '@utils/apis/weekly/questionType'
import styled from '@emotion/styled'
const QuestionImg = ({
  category,
  isToggled = true,
}: {
  category: DailyQuestionCategoryType
  isToggled?: boolean
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
