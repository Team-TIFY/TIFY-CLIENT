import {
  LongInputVariantType,
  ShortInputVariantType,
} from '@models/components/atoms/Input'

export const LONG_INPUT_TYPE: LongInputVariantType = {
  default: {
    display: 'none',
  },
  withInst: {
    display: 'block',
  },
}

export const SHORT_INPUT_TYPE: ShortInputVariantType = {
  default: {
    isIdInput: false,
  },
  idInput: {
    isIdInput: true,
  },
}
