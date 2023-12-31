import ProfileBox from '@components/atoms/ProfileBox'
import { TasteBoxVariantType } from '@models/apis/TasteType'

export type ProfileImageProps = {
  favorList: TasteBoxVariantType[]
}

export const ProfileImage = ({ favorList }: ProfileImageProps) => {
  return <ProfileBox favorList={favorList} />
}
