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
