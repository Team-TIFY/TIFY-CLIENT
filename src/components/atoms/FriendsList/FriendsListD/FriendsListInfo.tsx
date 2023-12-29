import styled from '@emotion/styled'

import { FriendsListDInfoPropsType } from '@models/components/atoms/FriendsList'
import { sliceString } from '@utils/sliceString'
import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'

const FriendsListInfo = ({
  userId,
  friendsNumber,
}: FriendsListDInfoPropsType) => {
  return (
    <ProfileWrapper>
      <Avatar variant="small" />
      <InfoWrapper>
        <Text typo="Subhead_14" color="white">
          @{sliceString(userId, 12)}
        </Text>
        <Text typo="Caption_10" color="gray_400">
          함께 아는 친구 {friendsNumber}명
        </Text>
      </InfoWrapper>
    </ProfileWrapper>
  )
}

export default FriendsListInfo

const ProfileWrapper = styled(FlexBox)`
  width: 180px;
  height: 100%;
  gap: 12px;
  justify-content: flex-start;
`

const InfoWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`
