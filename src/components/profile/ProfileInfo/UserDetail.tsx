import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Avatar } from '@components/atoms/Avatar'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import Svg from '@components/atoms/Svg'
import { UserInfoType } from '@models/apis/UserType'
import useGetDate from '@libs/hooks/useGetDate'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import ThreeDots from '@assets/icons/ThreeDots'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'

export interface UserDetailProps {
  userData: UserInfoType
}

export const UserDetail = ({ userData }: UserDetailProps) => {
  const { formatDate } = useGetDate()

  const { setIsMenuOpen } = useSetProfileRecoilState()
  const {
    setIsMenuOpen: setIsFriendMenuOpen,
    setIsCancelBlockMenuOpen: setIsFriendCancelBlockMenuOpen,
  } = useSetFriendRecoilState()
  const auth = useRecoilValue(authState)

  const getUserInfoText = () => {
    return formatDate(userData?.birth) + ' | ' + userData?.onBoardingStatus
  }

  return (
    <>
      <AvatarWrapper>
        <Avatar
          variant="medium"
          isVisible="visible"
          imageUrl={userData?.thumbnail}
        />
      </AvatarWrapper>
      <Spacing height={12} />
      <UserInfoWrapper>
        <FlexBox justify="space-between" style={{ marginBottom: '2px' }}>
          <Text
            typo="Headline_20"
            color="white"
            children={userData?.userName}
          />
          <Svg
            children={<ThreeDots />}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              userData.userId === auth.userProfile.userId
                ? setIsMenuOpen(true)
                : userData.blocked
                ? setIsFriendCancelBlockMenuOpen(true)
                : setIsFriendMenuOpen(true)
            }
          />
        </FlexBox>
        <Text
          typo="Mont_Caption_12M"
          color="gray_200"
          children={getUserInfoText()}
        />
      </UserInfoWrapper>
    </>
  )
}

const AvatarWrapper = styled.div``

const UserInfoWrapper = styled.div`
  height: 52px;
`
