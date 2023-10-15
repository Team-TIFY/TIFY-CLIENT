import { ChangeEvent, useState } from 'react'

const useInputTextChange = () => {
  const [_, setInputText] = useState('')

  const handleChangeInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }

  return handleChangeInputText
}

export default useInputTextChange
