import styled from '@emotion/styled'
const QuestionImgBox = () => {}

export default QuestionImgBox

const QuestionImageBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition:
    transform 0.5s,
    opacity 0.5s;
  cursor: pointer;

  &.clicked {
    transform: translate(-97px, -68px);
    opacity: 0.05;
  }
`
