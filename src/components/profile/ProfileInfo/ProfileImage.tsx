import { ProfileImagePropsType } from '@models/components/Profile/profile'
import ProfileBox from '@components/atoms/ProfileBox'

const ProfileImage = ({ favorList }: ProfileImagePropsType) => {
  return <ProfileBox favorList={favorList} />
}

export default ProfileImage
