import { theme } from '@styles/theme'
import styled from '@emotion/styled'

const BottomSheetBar = () => {
  return (
    <BottomSheetBarContainer>
      <div
        style={{
          borderRadius: '40px',
          width: '32px',
          height: '4px',
          backgroundColor: `${theme.palette.gray_500}`,
          opacity: '40%',
        }}
      />
    </BottomSheetBarContainer>
  )
}

export default BottomSheetBar

const BottomSheetBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 0px 16px 0px;
`
