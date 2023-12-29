import { OptionVariantType, OptionTextType } from '@models/Option'
import { TextType } from '@styles/theme'

export const OPTION_CHILDREN: Record<OptionVariantType, OptionTextType> = {
  new: `new`,
  account: `계정`,
}

export const OPTION_TEXT_COLOR: Record<OptionVariantType, TextType['color']> = {
  new: 'gray_800',
  account: 'gray_200',
}
