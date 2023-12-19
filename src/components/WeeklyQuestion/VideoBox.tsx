import {
  DailyQuestionVideoCategory,
  DailyQuestionCategoryType,
} from '@utils/apis/weekly/questionType'
import styled from '@emotion/styled'
const VideoBox = ({
  category,
  isToggled = true,
}: {
  category: DailyQuestionCategoryType
  isToggled?: boolean
}) => {
  return (
    <ImgContainer isToggled={isToggled}>
      <video muted autoPlay>
        <source src={DailyQuestionVideoCategory[category]} type="video/mp4" />
      </video>
    </ImgContainer>
  )
}
export default VideoBox

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
