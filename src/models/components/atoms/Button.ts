import { ButtonHTMLAttributes } from 'react'

import { KeyOfTypo } from '@styles/theme'

export type ButtonVariantType =
  | 'xlargeRound'
  | 'mediumRound'
  | 'smallRound'
  | 'circle'
  | 'kakao'

export type ButtonShapeType = {
  [key in ButtonVariantType]: {
    radius: number
    typo: KeyOfTypo
    width: number
    height: number
    padding: [number, number]
  }
}

export interface ButtonPropsType<T extends ButtonVariantType>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariantType
  xlargeDescription?: T extends 'xlargeRound' ? string | undefined : undefined
  xlargeRightChildren?: T extends 'xlargeRound'
    ? React.ReactNode | undefined
    : undefined
  fullWidth?: boolean
  width?: number
  isLoading?: boolean
  onClick?: () => void
}
