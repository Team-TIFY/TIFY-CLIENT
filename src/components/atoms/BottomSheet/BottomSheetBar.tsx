import styled from '@emotion/styled'

import { theme } from '@styles/theme'

const BottomSheetBar = () => {
  return (
    <StyledBottomSheetBarContainer>
      <StyledBottomSheetBar />
    </StyledBottomSheetBarContainer>
  )
}

export default BottomSheetBar

const StyledBottomSheetBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 0px 16px 0px;
`

const StyledBottomSheetBar = styled.div`
  border-radius: 40px;
  width: 32px;
  height: 4px;
  background-color: ${theme.palette.gray_500};
  opacity: 40%;
`
