import { friendState } from '@libs/store/friend'
import { useSetRecoilState } from 'recoil'

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

  return {
    setIsToggle,
    setShowPartialRequest,
    setIsAllRequest,
  }
}