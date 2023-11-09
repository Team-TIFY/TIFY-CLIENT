import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import Dimmer from '@components/layouts/Dimmer'
import { FlexBox } from '@components/layouts/FlexBox'
import EditProfileImage from '@components/profile/EditProfileImage'
import ProfileMenuButtons from '@components/profile/ProfileMenuButtons'
import EditUserInfo from './EditUserInfo'
import { profileState } from '@libs/store/profile'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'

const EditProfile = () => {
  const profileStateData = useRecoilValue(profileState)
  const { setIsEditImageMenuOpen } = useSetProfileRecoilState()
  const isEditImageMenuOpen = profileStateData.isEditImageMenuOpen ?? false

  const [outsideRef, handleClickEditProfileDimmer] = useOutsideClick(() =>
    setIsEditImageMenuOpen(false),
  )

  const renderIsEditProfileMenuButtons = () => {
    return (
      isEditImageMenuOpen && (
        <>
          <Dimmer
            dimmerRef={outsideRef}
            onClick={handleClickEditProfileDimmer}
          />
          <ProfileMenuButtons type="editProfile" />
        </>
      )
    )
  }

  return (
    <EditProfileWrapper>
      <EditProfileImage />
      <EditUserInfo />
      {renderIsEditProfileMenuButtons()}
    </EditProfileWrapper>
  )
}

export default EditProfile

const EditProfileWrapper = styled(FlexBox)`
  padding-top: 20px;
  flex-direction: column;
`
