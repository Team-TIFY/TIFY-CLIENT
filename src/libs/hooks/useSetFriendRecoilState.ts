import { useSetRecoilState } from 'recoil'

import { friendState } from '@libs/store/friend'

export const useSetFriendRecoilState = () => {
  const setFriendStateData = useSetRecoilState(friendState)

  const setIsToggle = (isToggleData: boolean) => {
    setFriendStateData((prevState) => ({
      ...prevState,
      isToggle: isToggleData,
    }))
  }

  const setShowPartialRequest = (showPartialRequestData: boolean) => {
    setFriendStateData((prevState) => ({
      ...prevState,
      showPartialRequest: showPartialRequestData,
    }))
  }

  const setIsAllRequest = (isAllRequestData: boolean) => {
    setFriendStateData((prevState) => ({
      ...prevState,
      isAllRequest: isAllRequestData,
    }))
  }

  const setIsMenuOpen = (isMenuOpenData: boolean) => {
    setFriendStateData((prevState) => ({
      ...prevState,
      isMenuOpen: isMenuOpenData,
    }))
  }

  const setIsCutOffMenuOpen = (isCutOffMenuOpenData: boolean) => {
    setFriendStateData((prevState) => ({
      ...prevState,
      isCutOffMenuOpen: isCutOffMenuOpenData,
    }))
  }

  const setIsBlockMenuOpen = (isBlockMenuOpenData: boolean) => {
    setFriendStateData((prevState) => ({
      ...prevState,
      isBlockMenuOpen: isBlockMenuOpenData,
    }))
  }

  const setIsCancelBlockMenuOpen = (isCancelBlockMenuOpenData: boolean) => {
    setFriendStateData((prevState) => ({
      ...prevState,
      isCancelBlockMenuOpen: isCancelBlockMenuOpenData,
    }))
  }

  return {
    setIsToggle,
    setShowPartialRequest,
    setIsAllRequest,
    setIsMenuOpen,
    setIsCutOffMenuOpen,
    setIsBlockMenuOpen,
    setIsCancelBlockMenuOpen,
  }
}
