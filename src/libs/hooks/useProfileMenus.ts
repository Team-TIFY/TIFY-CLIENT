import { useRecoilValue } from 'recoil'

import { friendState } from '@libs/store/friend'
import { profileState } from '@libs/store/profile'
import { ProfileButtonVariantType } from '@models/components/Profile/profile'
import { useOutsideClick } from './useOutsideClick'
import { useSetFriendRecoilState } from './useSetFriendRecoilState'
import useSetProfileRecoilState from './useSetProfileRecoilState'

export const useProfileMenus = () => {
  const profileStateData = useRecoilValue(profileState)
  const friendStateData = useRecoilValue(friendState)

  const { setIsMenuOpen } = useSetProfileRecoilState()
  const {
    setIsMenuOpen: setIsFriendMenuOpen,
    setIsCutOffMenuOpen,
    setIsBlockMenuOpen,
    setIsCancelBlockMenuOpen,
  } = useSetFriendRecoilState()

  const isProfileMenuOpen = profileStateData?.isMenuOpen ?? false
  const isFriendMenuOpen = friendStateData?.isMenuOpen ?? false
  const isCutOffMenuOpen = friendStateData?.isCutOffMenuOpen ?? false
  const isBlockMenuOpen = friendStateData?.isBlockMenuOpen ?? false
  const isCancelBlockMenuOpen = friendStateData?.isCancelBlockMenuOpen ?? false

  const [profileMenuOutsideRef, handleClickProfileDimmer] = useOutsideClick(
    () => setIsMenuOpen(false),
  )

  const [friendMenuOutsideRef, handleClickFriendDimmer] = useOutsideClick(() =>
    setIsFriendMenuOpen(false),
  )

  const [cutOffMenuOutsideRef, handleClickCutOffDimmer] = useOutsideClick(() =>
    setIsCutOffMenuOpen(false),
  )

  const [blockMenuOutsideRef, handleClickBlockDimmer] = useOutsideClick(() =>
    setIsBlockMenuOpen(false),
  )

  const [cancelBlockMenuOutsideRef, handleClickCancelBlockDimmer] =
    useOutsideClick(() => setIsCancelBlockMenuOpen(false))

  const menus: {
    menuOpen: boolean
    type: ProfileButtonVariantType
    ref: React.RefObject<HTMLDivElement>
    close: React.MouseEventHandler<HTMLDivElement>
  }[] = [
    {
      menuOpen: isProfileMenuOpen,
      type: 'myProfile',
      ref: profileMenuOutsideRef,
      close: handleClickProfileDimmer,
    },
    {
      menuOpen: isFriendMenuOpen,
      type: 'report',
      ref: friendMenuOutsideRef,
      close: handleClickFriendDimmer,
    },
    {
      menuOpen: isCutOffMenuOpen,
      type: 'cutOffFriend',
      ref: cutOffMenuOutsideRef,
      close: handleClickCutOffDimmer,
    },
    {
      menuOpen: isBlockMenuOpen,
      type: 'block',
      ref: blockMenuOutsideRef,
      close: handleClickBlockDimmer,
    },
    {
      menuOpen: isCancelBlockMenuOpen,
      type: 'cancelBlock',
      ref: cancelBlockMenuOutsideRef,
      close: handleClickCancelBlockDimmer,
    },
  ]

  return {
    menus,
    isProfileMenuOpen,
    isFriendMenuOpen,
    isCutOffMenuOpen,
    isBlockMenuOpen,
    isCancelBlockMenuOpen,
  }
}
