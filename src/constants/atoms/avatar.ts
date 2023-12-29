import { theme } from '@styles/theme'
import { AvatarShapeType, VisibleType } from '@models/components/atoms/Avatar'

export const AVATAR_SIZE_TYPE: AvatarShapeType = {
  xsmall: {
    size: 36,
  },
  small: {
    size: 48,
  },
  medium: {
    size: 60,
  },
}

export const VISIBLE_TYPE: VisibleType = {
  visible: {
    bgColor: 'transparent',
    display: 'none',
  },
  invisible: {
    bgColor: `${theme.palette.dim_500}`,
    display: 'block',
  },
}
