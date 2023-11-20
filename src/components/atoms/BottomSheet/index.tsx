import styled from '@emotion/styled'
import { useState } from 'react'
const BottomSheet = () => {
  const [expanded, setExpanded] = useState(false)
  return <BottomSheetContainer></BottomSheetContainer>
}

export default BottomSheet

const BottomSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
`
