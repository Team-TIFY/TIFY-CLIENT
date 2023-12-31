import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'

import { profileState } from '@libs/store/profile'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import Dimmer from '@components/layouts/Dimmer'
import { FlexBox } from '@components/layouts/FlexBox'
import EditProfileImage from '@components/profile/EditProfile/EditProfileImage'
import ProfileMenuButtons from '@components/profile/ProfileInfo/ProfileMenuButton'
import EditUserInfo from './EditUserInfo'

const EditProfile = () => {
  const profileStateData = useRecoilValue(profileState)
  const { setIsEditImageMenuOpen } = useSetProfileRecoilState()

  const isEditImageMenuOpen = profileStateData.isEditImageMenuOpen ?? false

  const [outsideRef, handleClickEditProfileDimmer] = useOutsideClick(() =>
    setIsEditImageMenuOpen(false),
  )

  return (
    <EditProfileWrapper>
      <EditProfileImage />
      <EditUserInfo />
      {isEditImageMenuOpen && (
        <>
          <Dimmer
            dimmerRef={outsideRef}
            onClick={handleClickEditProfileDimmer}
          />
          <ProfileMenuButtons type="editProfile" />
        </>
      )}
    </EditProfileWrapper>
  )
}

export default EditProfile

const EditProfileWrapper = styled(FlexBox)`
  padding-top: 20px;
  flex-direction: column;
`
