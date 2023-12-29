import { ButtonHTMLAttributes } from 'react'

import { KeyOfTypo, TextType } from '@styles/theme'

export type RoundButtonVariantType =
  | 'xlargeRound'
  | 'mediumRound'
  | 'smallRound'
  | 'circle'
  | 'kakao'

export type RoundButtonShapeType = {
  [key in RoundButtonVariantType]: {
    radius: number
    typo: KeyOfTypo
    width: number
    height: number
    padding: [number, number]
  }
}

export interface RoundButtonPropsType<T extends RoundButtonVariantType>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: RoundButtonVariantType
  xlargeDescription?: T extends 'xlargeRound' ? string | undefined : undefined
  xlargeRightChildren?: T extends 'xlargeRound'
    ? React.ReactNode | undefined
    : undefined
  fullWidth?: boolean
  width?: number
  isLoading?: boolean
  onClick?: () => void
}

export type SquareButtonVariantType =
  | 'xlargeSquare'
  | 'largeSquare'
  | 'mediumSquare'
  | 'medium2Square'
  | 'medium3Square'
  | 'smallSquare'
  | 'xsmallSquareP'
  | 'xsmallSquareS'

export type SquareButtonSubVariantType =
  | 'default'
  | 'selected'
  | 'selectedMultiple'

export type SquareXlargeSubVariantType =
  | 'alone'
  | 'top'
  | 'middle'
  | 'foot'
  | 'withProfile'
  | 'LogOutBtn'
  | 'DeleteBtn'

export type SquareButtonShapeType = {
  [key in SquareButtonVariantType]: {
    radius: number
    typo: KeyOfTypo
    width: number
    height: number
  }
}

export interface ButtonProps<
  T extends SquareButtonSubVariantType,
  K extends SquareButtonVariantType,
  G extends SquareXlargeSubVariantType,
> extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: SquareButtonVariantType
  subVariant: T
  textColor?: TextType['color']
  xlargeChildren?: K extends 'xlargeSquare' ? React.ReactNode : undefined
  xlargeChildrenTwo?: K extends 'xlargeSquare' ? React.ReactNode : undefined
  fullWidth?: boolean
  isLoading?: boolean
  selectedCount?: T extends 'selectedMultiple' ? React.ReactNode : undefined
  xlargeVariant?: K extends 'xlargeSquare'
    ? SquareXlargeSubVariantType
    : undefined
  imageUrl?: G extends 'withProfile' ? string : undefined
  onClick?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
}
