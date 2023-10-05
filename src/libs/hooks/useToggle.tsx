import { useCallback, useState } from 'react'

const useToggle = <T extends boolean>(initialState = true) => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return [state, toggle] as [T, () => void]
}

export default useToggle
