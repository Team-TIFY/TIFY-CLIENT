import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { sliceString } from '@utils/sliceString'

interface FriendsListCProps {
  name: string
  currentState: string
  imageUrl: string
}

const FriendsListC = ({
  name,
  currentState,
  imageUrl = '',
}: FriendsListCProps) => {
  return (
    <Wrapper>
      <TopWrapper>
        <StyledImg left={12} top={12}>
          <img src={'/images/makeup.png'} />
        </StyledImg>
        <StyledImg left={96} top={12}>
          <img src={'/images/exercise.png'} />
        </StyledImg>
        <StyledImg left={54} top={41}>
          <img src={'/images/keyring.png'} />
        </StyledImg>
      </TopWrapper>
      <BottomWrapper></BottomWrapper>
      <InfoWrapper>
        <Avatar variant={'small'} imageUrl={imageUrl} />
        <TextWrapper>
          <Text typo={'Subhead_14'} color="white">
            {name}
          </Text>
          <StyledText>
            <Text typo={'Caption_10'} color="gray_200">
              {sliceString(currentState, 14)}
            </Text>
          </StyledText>
        </TextWrapper>
      </InfoWrapper>
    </Wrapper>
  )
}

export default FriendsListC

const Wrapper = styled.div`
  width: 156px;
  height: 217px;
  border-radius: 12px;
  position: relative;
`

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

const InfoWrapper = styled(FlexBox)`
  width: 136px;
  height: 108px;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 16px;
  left: 10px;
  gap: 12px;
`

const TextWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 4px;
`

const StyledText = styled.div`
  background-color: ${theme.palette.gray_900};
  border-radius: 12px;
  padding: 4px 8px;
`
