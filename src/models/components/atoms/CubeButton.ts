import { ButtonHTMLAttributes } from 'react'

export type CubeButtonVariantType = 'unSelected' | 'selected' | 'disabled'

export interface CubeButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: CubeButtonVariantType
  img: string
  text: string
}
