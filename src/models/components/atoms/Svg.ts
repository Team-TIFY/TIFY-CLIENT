import { HTMLAttributes } from 'react'

export interface SvgPropsType extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onClick?: () => void
  width?: 'fit-content' | number
  height?: 'fit-content' | number
}
