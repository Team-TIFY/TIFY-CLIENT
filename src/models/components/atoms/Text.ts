import { HTMLAttributes } from 'react'

import { TextType } from '@styles/theme'

export interface TextPropsType extends HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  typo: TextType['typo']
  color?: TextType['color']
  children: string
}
