import { theme } from '@styles/theme'

import { ButtonColorType } from '@models/components/atoms/TextBubble'

export const BUBBLE_COLOR_TYPE: ButtonColorType = {
  new: {
    background: `${theme.palette.purple_500}`,
    nickname: 'gray_100',
    reply: 'white',
  },
  old: {
    background: `${theme.palette.gray_700}`,
    nickname: 'gray_100',
    reply: 'white',
  },
  older: {
    background: `${theme.palette.gray_800}`,
    nickname: 'gray_200',
    reply: 'gray_500',
  },
}
