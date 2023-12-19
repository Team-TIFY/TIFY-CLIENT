import ProfileBox from '@components/atoms/ProfileBox'
import { TasteBoxVariantType } from '@utils/apis/favor/TasteType'

export type ProfileImageProps = {
  favorList: TasteBoxVariantType[]
}

export const ProfileImage = ({ favorList }: ProfileImageProps) => {
  return <ProfileBox favorList={favorList} />
}
