import styled from '@emotion/styled'

import { FriendsDescriptionType } from '@models/components/atoms/FriendsList'
import CircleIcon from '@assets/icons/CircleIcon'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'

const FriendsDescription = ({
  description,
  userName,
  birthdayDescription,
  birthday,
}: FriendsDescriptionType) => {
  return (
    <FriendsInfoWrapper>
      <Text typo="Subhead_14" color="white">
        {userName}
      </Text>
      {description === 'birthday' && (
        <FlexBox justify="flex-start" gap={2}>
          <Text color="gray_300" typo="Caption_10">
            {birthdayDescription && birthdayDescription + ' · '}
          </Text>
          <Text color="gray_300" typo="Caption_10">
            {birthday}
          </Text>
        </FlexBox>
      )}
      {description === 'newUpdate' && (
        <FlexBox justify="flex-start" gap={2}>
          <Svg children={<CircleIcon />} style={{ display: 'flex' }} />
          <Text color="purple_400" typo="Caption_10">
            새로운 업데이트
          </Text>
        </FlexBox>
      )}
    </FriendsInfoWrapper>
  )
}

export default FriendsDescription

const FriendsInfoWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`
