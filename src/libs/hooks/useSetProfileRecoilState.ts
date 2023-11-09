import { profileState } from '@libs/store/profile'
import { useSetRecoilState } from 'recoil'

const useSetProfileRecoilState = () => {
  const setProfileStateData = useSetRecoilState(profileState)

  const setIsMenuOpen = (isMenuOpenData: boolean) => {
    setProfileStateData((prevState) => ({
      ...prevState,
      isMenuOpen: isMenuOpenData,
    }))
  }

  const setIsEditImageMenuOpen = (isEditImageMenuOpenData: boolean) => {
    setProfileStateData((prevState) => ({
      ...prevState,
      isEditImageMenuOpen: isEditImageMenuOpenData,
    }))
  }

  const setIsEdit = (isEditData: boolean) => {
    setProfileStateData((prevState) => ({ ...prevState, isEdit: isEditData }))
  }

  const setButtonText = (buttonTextData: string) => {
    setProfileStateData((prevState) => ({
      ...prevState,
      buttonText: buttonTextData,
    }))
  }

  return { setIsMenuOpen, setIsEditImageMenuOpen, setIsEdit, setButtonText }
}

export default useSetProfileRecoilState
