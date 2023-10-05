import { useCallback, useState } from 'react'

type useToggleReturnType = readonly [boolean, () => void]

const useToggle = (initialState = true): useToggleReturnType => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return [state, toggle]
}

export default useToggle
