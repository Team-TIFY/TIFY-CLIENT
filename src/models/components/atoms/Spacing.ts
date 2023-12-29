import { SerializedStyles } from '@emotion/react'

export type SpacingPropsType = {
  width?: 16 | 24
  height?: 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 56 | 64 | 100
  variant?: 'default' | 'scroll' | 'side'
  style?: SerializedStyles
}
