import styled from '@emotion/styled'
import { Avatar } from '@components/atoms/Avatar'
import { Spacing } from '@components/atoms/Spacing'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { UserInfo } from '@utils/apis/user/UserType'
import ThreeDots from '@assets/icons/ThreeDots'
import Svg from '@components/atoms/Svg'
import useGetDate from '@libs/hooks/useGetDate'

export interface UserDetailProps {
  userData: UserInfo
}

export const UserDetail = ({ userData }: UserDetailProps) => {
  const { formatDate } = useGetDate()

  return (
    <>
      <AvatarWrapper>
        <Avatar
          variant="medium"
          isVisible="visible"
          imageUrl={userData?.imageUrl}
        />
      </AvatarWrapper>
      <Spacing height={12} />
      <UserInfoWrapper>
        <FlexBox justify="space-between">
          <Text
            typo="Headline_20"
            color="white"
            children={userData?.userName}
          />
          <Svg children={<ThreeDots />} style={{ cursor: 'pointer' }} />
        </FlexBox>
        <Text
          typo="Mont_Caption_12M"
          color="gray_200"
          children={
            formatDate(userData?.birth) + ' | ' + userData?.onBoardingStatus
          }
        />
      </UserInfoWrapper>
    </>
  )
}

const AvatarWrapper = styled.div``

const UserInfoWrapper = styled.div`
  height: 52px;
`
