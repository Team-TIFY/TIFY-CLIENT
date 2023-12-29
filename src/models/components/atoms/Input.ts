import { TextareaHTMLAttributes, ChangeEvent } from 'react'

export interface BasicInputPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxText?: number
  explanation?: string
  explanationPadding?: number
  placeholder?: string
  warning?: string
  height: number
  error: boolean
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export type LongInputVariant = 'default' | 'withInst'

export type LongInputVariantType = {
  [key in LongInputVariant]: {
    display: string
  }
}

export interface LongInputPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: LongInputVariant
  explanation?: string
  content?: string
  value?: string
  fullWidth: boolean
  customEvent?: (e: any) => void
  onClick: () => void
}

export type PropsType = Partial<LongInputPropsType>

export interface SearchInputPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: number
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onClick?: () => void
  customRemoveHandler?: () => void
}
