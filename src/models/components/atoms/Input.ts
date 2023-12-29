import { TextareaHTMLAttributes, ChangeEvent } from 'react'

export interface InputPropsType
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

export type InputVariant = 'default' | 'withInst'

export type InputVariantType = {
  [key in InputVariant]: {
    display: string
  }
}

export interface InputPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: InputVariant
  explanation?: string
  content?: string
  value?: string
  fullWidth: boolean
  customEvent?: (e: any) => void
  onClick: () => void
}

export type PropsType = Partial<InputPropsType>
