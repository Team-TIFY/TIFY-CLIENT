import { FlexBox } from '@components/layouts/FlexBox'
import EditProfileImage from '@components/profile/EditProfileImage'
import styled from '@emotion/styled'
import EditUserInfo from './EditUserInfo'

const EditProfile = () => {
  return (
    <EditProfileWrapper>
      <EditProfileImage />
      <EditUserInfo />
    </EditProfileWrapper>
  )
}

export default EditProfile

const EditProfileWrapper = styled(FlexBox)`
  padding-top: 20px;
  flex-direction: column;
`
