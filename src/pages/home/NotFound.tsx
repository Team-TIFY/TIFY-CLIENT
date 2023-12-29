import styled from '@emotion/styled'
import { Text } from '@components/atoms/Text'

const NotFound = () => {
  return (
    <div>
      <ImgContainer>
        <img src="/images/giftBox.png" />
      </ImgContainer>
      <Text typo="Subhead_16" color="gray_200">
        올바르지 않은 경로입니다.
      </Text>
    </div>
  )
}

export default NotFound

const ImgContainer = styled.div`
  justify-content: center;
  width: 100%;
  height: 242px;
  img {
    height: 100%;
  }
`
