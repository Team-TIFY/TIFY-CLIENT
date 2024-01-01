import { useState } from 'react'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import backgroundImageUrl from '@assets/image/share_profile_background.png'
import { BackgroundColorVariantType } from '@models/components/Profile/profile'
import { FlexBox } from '@components/layouts/FlexBox'
import ShareProfileIcons from './ShareProfileIcons'
import ShareProfileInfo from './ShareProfileInfo'

const ShareProfileImage = () => {
  const [backgroundColor, setBackgroundColor] =
    useState<BackgroundColorVariantType>('gray_900')
  const [backgroundImage, setBackgroundImage] = useState(true)

  return (
    <ProfileImageWrapper color={backgroundColor}>
      <ShareProfileIcons
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        setBackgroundImage={setBackgroundImage}
      />
      <ShareProfileInfo />
      {backgroundImage && (
        <img src={backgroundImageUrl} style={{ position: 'absolute' }} />
      )}
    </ProfileImageWrapper>
  )
}

export default ShareProfileImage

const ProfileImageWrapper = styled(FlexBox)<{
  color: BackgroundColorVariantType
}>`
  position: relative;
  flex-direction: column;
  background-color: ${({ color }) => `${theme.palette[color]}`};
  margin: 12px auto 15px auto;
  width: 320px;
  height: 568px;
  border-radius: 12px;
`
