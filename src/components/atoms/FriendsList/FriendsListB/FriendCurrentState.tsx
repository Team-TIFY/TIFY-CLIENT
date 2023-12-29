import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { FriendsCurrentStateType } from '@models/components/atoms/FriendsList'
import { sliceString } from '@utils/sliceString'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'

const FriendsCurrentState = ({ currentState }: FriendsCurrentStateType) => {
  return (
    <FriendsCurrentStateWrapper>
      <StyledTextWrapper length={currentState.length > 15 ? 1 : 0}>
        <Text
          typo="Caption_10"
          color="gray_200"
          as="div"
          style={{ width: currentState.length > 15 ? '100%' : 'fit-content' }}
          children={sliceString(currentState, 15)}
        />
      </StyledTextWrapper>
    </FriendsCurrentStateWrapper>
  )
}

export default FriendsCurrentState

const FriendsCurrentStateWrapper = styled(FlexBox)`
  width: 144px;
  height: 100%;
  justify-content: flex-end;
`

const StyledTextWrapper = styled(FlexBox)<{ length: 0 | 1 }>`
  width: ${({ length }) => (length ? `100%` : `fit-content`)};
  height: 26px;
  padding: 6px 8px;
  border-radius: 13px;
  background-color: ${theme.palette.gray_800};
`
