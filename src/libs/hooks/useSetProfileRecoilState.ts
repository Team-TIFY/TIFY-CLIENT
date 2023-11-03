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

  const setIsEdit = (isEditData: boolean) => {
    setProfileStateData((prevState) => ({ ...prevState, isEdit: isEditData }))
  }

  const setButtonText = (buttonTextData: string) => {
    setProfileStateData((prevState) => ({
      ...prevState,
      buttonText: '수정 완료',
    }))
  }

  return { setIsMenuOpen, setIsEdit, setButtonText }
}

export default useSetProfileRecoilState
