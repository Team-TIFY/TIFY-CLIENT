import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useState } from 'react'
import ShareProfileIcons from './ShareProfileIcons'
import ShareProfileInfo from './ShareProfileInfo'
import backgroundImageUrl from '@assets/image/share_profile_background.png'

export type BackgroundColorVariant = 'gray_900' | 'purple_500' | 'pink_300'

const ShareProfileImage = () => {
  const [backgroundColor, setBackgroundColor] =
    useState<BackgroundColorVariant>('gray_900')
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
  color: BackgroundColorVariant
}>`
  position: relative;
  flex-direction: column;
  background-color: ${({ color }) => `${theme.palette[color]}`};
  margin: 12px auto 15px auto;
  width: 320px;
  height: 568px;
  border-radius: 12px;
`
