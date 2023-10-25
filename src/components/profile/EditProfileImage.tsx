import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'

type EditProfileImagePropsType = {
  imageUrl: string
}

const EditProfileImage = ({ imageUrl }: EditProfileImagePropsType) => {
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
