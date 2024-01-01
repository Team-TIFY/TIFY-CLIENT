import styled from '@emotion/styled'

import {
  MenuButtonType,
  ProfileMenuButtonListItemPropsType,
} from '@models/components/Profile/profile'
import Dimmer from '@components/layouts/Dimmer'
import ProfileMenuButton from './ProfileMenuButton'

const ProfileMenuButtonListItem = ({
  userData,
  userId,
  idx,
  menu,
}: ProfileMenuButtonListItemPropsType) => {
  const getFriendUserId = (menu: MenuButtonType) => {
    if (
      menu.type === 'cutOffFriend' ||
      menu.type === 'block' ||
      menu.type === 'cancelBlock'
    ) {
      return userData?.userId
    }
  }

  const getFriendImageUrl = (menu: MenuButtonType) => {
    if (
      menu.type === 'cutOffFriend' ||
      menu.type === 'block' ||
      menu.type === 'cancelBlock'
    ) {
      return userData?.thumbnail
    }
  }

  return (
    <ProfileMenuButtonWrapper key={idx}>
      <Dimmer dimmerRef={menu.ref} onClick={menu.close} />
      <ProfileMenuButton
        type={menu.type}
        friendId={userId}
        friendUserId={getFriendUserId(menu)}
        friendImageUrl={getFriendImageUrl(menu)}
      />
    </ProfileMenuButtonWrapper>
  )
}

export default ProfileMenuButtonListItem

const ProfileMenuButtonWrapper = styled.div``
