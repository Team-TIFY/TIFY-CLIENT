import styled from '@emotion/styled'
import { FriendsFavorItemsPropsType } from '@models/components/atoms/FriendsList'

import { theme } from '@styles/theme'
import { tasteBoxImage } from '@constants/Profile/tasteBoxImage'

const FriendsFavorItems = ({ favorList }: FriendsFavorItemsPropsType) => {
  return (
    <>
      <TopWrapper>
        <StyledImg left={12} top={12}>
          <img src={tasteBoxImage[favorList[0]]} />
        </StyledImg>
        <StyledImg left={96} top={12}>
          <img src={tasteBoxImage[favorList[1]]} />
        </StyledImg>
        <StyledImg left={54} top={41}>
          <img src={tasteBoxImage[favorList[2]]} />
        </StyledImg>
      </TopWrapper>
      <BottomWrapper />
    </>
  )
}

export default FriendsFavorItems

const TopWrapper = styled.div`
  width: 100%;
  height: 117px;
  position: relative;
  border-radius: 12px 12px 0px 0px;
  background-color: ${theme.palette.gray_900};
`

const StyledImg = styled.div<{ left: number; top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 48px;
  height: 48px;

  img {
    width: 100%;
    height: 100%;
  }
`

const BottomWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 0px 0px 12px 12px;
  background-color: ${theme.palette.gray_800};
`
