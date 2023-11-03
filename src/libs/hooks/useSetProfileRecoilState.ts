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

  return { setIsMenuOpen, setIsEdit }
}

export default useSetProfileRecoilState
