import { useRecoilValue } from 'recoil'

import { authState } from '@libs/store/auth'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'

const EditProfileImage = () => {
  const auth = useRecoilValue(authState)
  const { setIsEditImageMenuOpen } = useSetProfileRecoilState()

  const imageUrl = auth.userProfile.imageUrl

  const handleClickEditProfileImageButton = () => {
    setIsEditImageMenuOpen(true)
  }

  return (
    <>
      <Avatar variant="medium" imageUrl={imageUrl} />
      <Text
        typo="Caption_12M"
        children="프로필 사진 변경"
        color="purple_400"
        style={{ margin: '12px 0', cursor: 'pointer' }}
        onClick={handleClickEditProfileImageButton}
      />
    </>
  )
}

export default EditProfileImage
