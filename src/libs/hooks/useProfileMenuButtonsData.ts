import { ProfileButtonVariant } from '@components/profile/ProfileMenuButtons'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { TextType } from '@styles/theme'
import { useNavigate } from 'react-router-dom'
import { useSetFriendRecoilState } from './useSetFriendRecoilState'

type ButtonTextType = { text: string; color: TextType['color'] }

const useProfileMenuButtonsData = (type: ProfileButtonVariant) => {
  const { setIsMenuOpen } = useSetProfileRecoilState()
  const {
    setIsMenuOpen: setIsFriendMenuOpen,
    setIsCutOffMenuOpen,
    setIsBlockMenuOpen,
  } = useSetFriendRecoilState()

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

    const onClickFirstButton = () => {
      navigate('/profile/edit-profile')

      setIsMenuOpen(false)
    }
    const onClickSecondButton = () => {}
    const onClickCancelButton = () => {
      setIsMenuOpen(false)
    }

    return {
      firstButtonText,
      secondButtonText,
      onClickFirstButton,
      onClickSecondButton,
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

    const onClickFirstButton = () => {}
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
  } else if (type === 'cutOffFriend') {
    const firstButtonText: ButtonTextType = {
      text: '친구 끊기',
      color: 'red_500',
    }

    const onClickFirstButton = () => {}
    const onClickCancelButton = () => {
      setIsCutOffMenuOpen(false)
    }

    return {
      firstButtonText,
      onClickFirstButton,
      onClickCancelButton,
    }
  } else {
    const firstButtonText: ButtonTextType = {
      text: '차단하기',
      color: 'red_500',
    }

    const onClickFirstButton = () => {}
    const onClickCancelButton = () => {
      setIsBlockMenuOpen(false)
    }

    return {
      firstButtonText,
      onClickFirstButton,
      onClickCancelButton,
    }
  }
}

export default useProfileMenuButtonsData
