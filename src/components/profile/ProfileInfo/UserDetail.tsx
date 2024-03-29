import { useRecoilValue } from 'recoil'
import styled from '@emotion/styled'

import useGetDate from '@libs/hooks/useGetDate'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { authState } from '@libs/store/auth'
import ThreeDots from '@assets/icons/ThreeDots'
import { UserDetailPropsType } from '@models/components/Profile/profile'
import { FlexBox } from '@components/layouts/FlexBox'
import { Avatar } from '@components/atoms/Avatar'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import Svg from '@components/atoms/Svg'

export const UserDetail = ({ userData }: UserDetailPropsType) => {
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

  const handleClickMenuButton = () => {
    if (userData.userId === auth.userProfile.userId) {
      return setIsMenuOpen(true)
    } else if (userData.blocked) {
      return setIsFriendCancelBlockMenuOpen(true)
    }
    return setIsFriendMenuOpen(true)
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
            onClick={handleClickMenuButton}
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
