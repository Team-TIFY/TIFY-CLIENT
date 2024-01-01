import { useNavigate } from 'react-router-dom'

import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import useFriendMutate from './mutations/useFriendMutate'
import { useSetFriendRecoilState } from './useSetFriendRecoilState'
import { ProfileButtonVariantType } from '@models/components/Profile/profile'
import { ButtonTextType } from '@models/hooks/useProfileMenuButtonsData'

const useProfileMenuButtonsData = (
  type: ProfileButtonVariantType,
  friendId?: number,
) => {
  const {
    setIsMenuOpen,
    setIsEditImageMenuOpen,
    setIsMenuOpen: setIsFriendMenuOpen,
    setIsCutOffMenuOpen,
    setIsBlockMenuOpen,
    setIsCancelBlockMenuOpen,
  } = { ...useSetProfileRecoilState(), ...useSetFriendRecoilState() }

  const {
    reportFriendMutate,
    blockFriendMutate,
    cutOffFriendMutate,
    cancelBlockFriendMutate,
  } = useFriendMutate()

  const navigate = useNavigate()

  if (type === 'myProfile') {
    const firstButtonText: ButtonTextType = {
      text: '프로필 수정',
      color: 'gray_100',
    }
    const secondButtonText: ButtonTextType = {
      text: '프로필 공유',
      color: 'gray_100',
    }
    const thirdButtonText: ButtonTextType = {
      text: '취향상자 수정',
      color: 'gray_100',
    }

    const onClickFirstButton = () => {
      navigate('/profile/editProfile')

      setIsMenuOpen(false)
    }
    const onClickSecondButton = () => {
      navigate('/profile/shareProfile')

      setIsMenuOpen(false)
    }
    const onClickThirdButton = () => {
      navigate('/profile/editFavorBox')

      setIsMenuOpen(false)
    }
    const onClickCancelButton = () => {
      setIsMenuOpen(false)
    }

    return {
      firstButtonText,
      secondButtonText,
      thirdButtonText,
      onClickFirstButton,
      onClickSecondButton,
      onClickThirdButton,
      onClickCancelButton,
    }
  } else if (type === 'report') {
    const firstButtonText: ButtonTextType = {
      text: '신고하기',
      color: 'red_500',
    }
    const secondButtonText: ButtonTextType = {
      text: '차단하기',
      color: 'red_500',
    }

    const onClickFirstButton = () => {
      friendId && reportFriendMutate(friendId)
    }
    const onClickSecondButton = () => {
      setIsFriendMenuOpen(false)
      setIsBlockMenuOpen(true)
    }
    const onClickCancelButton = () => {
      setIsFriendMenuOpen(false)
    }

    return {
      firstButtonText,
      secondButtonText,
      onClickFirstButton,
      onClickSecondButton,
      onClickCancelButton,
    }
  } else if (type === 'editProfile') {
    const firstButtonText: ButtonTextType = {
      text: '갤러리에서 선택',
      color: 'gray_100',
    }
    const secondButtonText: ButtonTextType = {
      text: '기본 이미지로 변경',
      color: 'gray_100',
    }

    const onClickFirstButton = () => {}
    const onClickSecondButton = () => {}
    const onClickCancelButton = () => {
      setIsEditImageMenuOpen(false)
    }

    return {
      firstButtonText,
      secondButtonText,
      onClickFirstButton,
      onClickSecondButton,
      onClickCancelButton,
    }
  } else if (type === 'cutOffFriend') {
    const firstButtonText: ButtonTextType = {
      text: '친구 끊기',
      color: 'red_500',
    }

    const onClickFirstButton = () => {
      friendId && cutOffFriendMutate(friendId)
    }
    const onClickCancelButton = () => {
      setIsCutOffMenuOpen(false)
    }

    return {
      firstButtonText,
      onClickFirstButton,
      onClickCancelButton,
    }
  } else if (type === 'block') {
    const firstButtonText: ButtonTextType = {
      text: '차단하기',
      color: 'red_500',
    }

    const onClickFirstButton = () => {
      friendId && blockFriendMutate(friendId)
    }
    const onClickCancelButton = () => {
      setIsBlockMenuOpen(false)
    }

    return {
      firstButtonText,
      onClickFirstButton,
      onClickCancelButton,
    }
  } else {
    const firstButtonText: ButtonTextType = {
      text: '차단 해제하기',
      color: 'red_500',
    }

    const onClickFirstButton = () => {
      friendId && cancelBlockFriendMutate(friendId)
    }
    const onClickCancelButton = () => {
      setIsCancelBlockMenuOpen(false)
    }

    return {
      firstButtonText,
      onClickFirstButton,
      onClickCancelButton,
    }
  }
}

export default useProfileMenuButtonsData
