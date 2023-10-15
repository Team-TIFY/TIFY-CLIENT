import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'

const Account = () => {
  return (
    <Wrapper>
      <Text children="이메일" typo="Caption_12R" color="gray_400" />
    </Wrapper>
  )
}

export default Account

const Wrapper = styled.div`
  width: 100%;
  height: 82px;
  padding: 16px 20px 16px 24px;
`
