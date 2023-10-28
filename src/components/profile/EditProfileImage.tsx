import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'
import { authState } from '@libs/store/auth'
import { useRecoilValue } from 'recoil'

const EditProfileImage = () => {
  const auth = useRecoilValue(authState)
  const imageUrl = auth.userProfile.imageUrl

  return (
    <>
      <Avatar variant="medium" imageUrl={imageUrl} />
      <Text
        typo="Caption_12M"
        children="프로필 사진 변경"
        color="purple_400"
        style={{ margin: '12px 0' }}
      />
    </>
  )
}

export default EditProfileImage
