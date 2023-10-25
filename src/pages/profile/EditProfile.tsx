import { FlexBox } from '@components/layouts/FlexBox'
import EditProfileImage from '@components/profile/EditProfileImage'
import styled from '@emotion/styled'
import { authState } from '@libs/store/auth'
import { useRecoilValue } from 'recoil'
import EditUserInfo from './EditUserInfo'

const EditProfile = () => {
  const auth = useRecoilValue(authState)

  return (
    <EditProfileWrapper>
      <EditProfileImage imageUrl={auth.userProfile.imageUrl} />
      <EditUserInfo
        userName={auth.userProfile.userName}
        userId={auth.userProfile.userId}
        birth={auth.userProfile.birth}
        onBoardingStatus={auth.userProfile.onBoardingStatus}
      />
    </EditProfileWrapper>
  )
}

export default EditProfile

const EditProfileWrapper = styled(FlexBox)`
  padding-top: 20px;
  flex-direction: column;
`
