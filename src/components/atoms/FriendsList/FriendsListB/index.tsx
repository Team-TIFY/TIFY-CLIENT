import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { Avatar } from '@components/atoms/Avatar'
import Svg from '@components/atoms/Svg'
import CircleIcon from '@assets/icons/CircleIcon'

type DescriptionType = 'today' | 'none' | 'newUpdate'

interface FriendsListBProps {
  name: string;
  currentState: string;
  description: DescriptionType;
  today?: DescriptionType extends 'today' ? string : undefined;
  onClick: () => void;
}

const FriendsListB = ({
  name,
  currentState,
  description,
  today,
  ...props
}: FriendsListBProps) => {
  return (
    <Wrapper {...props}>
      <FriendsProfileWrapper>
        <Avatar variant="small" />
        <FriendsInfoWrapper>
          <Text typo="Subhead_14" color="white">
            {name}
          </Text>
          {description === 'today' && (
            <FlexBox justify={'flex-start'} gap={2}>
              <Text color="gray_300" typo="Caption_10">
                오늘 ·
              </Text>
              <Text color="gray_300" typo="Caption_10">
                {today}
              </Text>
            </FlexBox>
          )}
          {description === 'newUpdate' && (
            <FlexBox justify={'flex-start'} gap={2}>
              <Svg children={<CircleIcon />} style={{ display: 'flex' }} />
              <Text color="purple_400" typo="Caption_10">
                새로운 업데이트
              </Text>
            </FlexBox>
          )}
        </FriendsInfoWrapper>
      </FriendsProfileWrapper>
      <FriendsCurrentStateWrapper>
        <StyledTextWrapper length={currentState.length > 15}>
          <Text
            typo="Caption_10"
            color="gray_200"
            as="div"
            style={{ width: currentState.length > 15 ? '100%' : 'fit-content' }}
            children={
              currentState.length > 15
                ? currentState.slice(0, 14) + '···'
                : currentState
            }
          />
        </StyledTextWrapper>
      </FriendsCurrentStateWrapper>
    </Wrapper>
  )
}

export default FriendsListB

const Wrapper = styled(FlexBox)`
  width: 328px;
  height: 48px;
  justify-content: space-between;
`

const FriendsProfileWrapper = styled(FlexBox)`
  justify-content: space-between;
  gap: 12px;
  width: 180px;
  height: 100%;
`

const FriendsInfoWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`

const FriendsCurrentStateWrapper = styled(FlexBox)`
  width: 144px;
  height: 100%;
  justify-content: flex-end;
`

const StyledTextWrapper = styled(FlexBox)<{ length: boolean }>`
  width: ${({ length }) => (length ? `100%` : `fit-content`)};
  height: 26px;
  padding: 6px 8px;
  border-radius: 13px;
  background-color: ${theme.palette.gray_800};
`
