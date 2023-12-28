import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { FriendsListInfoPropsType } from '@models/components/atoms/FriendsList'
import { sliceString } from '@utils/sliceString'
import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'

const FriendListInfo = ({
  imageUrl,
  userName,
  currentState,
}: FriendsListInfoPropsType) => {
  return (
    <InfoWrapper>
      <Avatar variant="small" imageUrl={imageUrl} />
      <TextWrapper>
        <Text typo="Subhead_14" color="white">
          {userName}
        </Text>
        <StyledText>
          <Text typo="Caption_10" color="gray_200">
            {sliceString(currentState, 11)}
          </Text>
        </StyledText>
      </TextWrapper>
    </InfoWrapper>
  )
}

export default FriendListInfo

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
