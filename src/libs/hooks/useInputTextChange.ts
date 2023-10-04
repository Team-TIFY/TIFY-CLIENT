import { ChangeEvent, useState } from 'react'

export const useInputTextChange = () => {
  const [_, setInputText] = useState('')

  const handleChangeInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }

  return handleChangeInputText
}
