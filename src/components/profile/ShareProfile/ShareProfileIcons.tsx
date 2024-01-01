import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { ShareProfileIconsPropsType } from '@models/components/Profile/profile'
import BackgroundIcon from '@assets/icons/BackgroundIcon'
import ColorIcon from '@assets/icons/ColorIcon'
import Svg from '@components/atoms/Svg'
import { FlexBox } from '@components/layouts/FlexBox'

const ShareProfileIcons = ({
  backgroundColor,
  setBackgroundColor,
  setBackgroundImage,
}: ShareProfileIconsPropsType) => {
  const handleClickColorIcon = () => {
    if (backgroundColor === 'gray_900') {
      setBackgroundColor('pink_300')
    } else if (backgroundColor === 'pink_300') {
      setBackgroundColor('purple_500')
    } else {
      setBackgroundColor('gray_900')
    }
  }

  const handleClickBackgroundIcon = () => {
    setBackgroundImage((prevState) => !prevState)
  }

  return (
    <IconWrapper>
      <BackgroundIconWrapper>
        <Svg
          children={<BackgroundIcon />}
          onClick={handleClickBackgroundIcon}
        />
      </BackgroundIconWrapper>
      <ColorIconWrapper>
        <Svg children={<ColorIcon />} onClick={handleClickColorIcon} />
      </ColorIconWrapper>
    </IconWrapper>
  )
}

export default ShareProfileIcons

const IconWrapper = styled(FlexBox)`
  gap: 12px;
  position: absolute;
  top: 28px;
  right: 16px;
  z-index: 1;
`

const BackgroundIconWrapper = styled(FlexBox)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.palette.white};
  cursor: pointer;
`

const ColorIconWrapper = styled(BackgroundIconWrapper)``
