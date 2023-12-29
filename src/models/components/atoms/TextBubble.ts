import { KeyOfPalette } from '@styles/theme'

export type BubbleVariantType = 'new' | 'old' | 'older'

export type ButtonColorType = {
  [key in BubbleVariantType]: {
    background: string
    nickname: KeyOfPalette
    reply: KeyOfPalette
  }
}

export type BubblePropsType = {
  variant: BubbleVariantType
  nickname: string
  reply: string
}
