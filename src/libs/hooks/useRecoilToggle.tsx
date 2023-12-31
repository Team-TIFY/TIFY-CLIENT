import { useCallback } from 'react'
import { RecoilState, useRecoilState } from 'recoil'

import {
  HasValueProperty,
  UseToggleReturnType,
} from '@models/hooks/useRecoilToggle'

const useRecoilToggle = <T,>(
  toggleState: RecoilState<HasValueProperty<T>>,
): UseToggleReturnType<HasValueProperty<T>> => {
  const [state, setState] = useRecoilState(toggleState)

  const toggle = useCallback(() => {
    setState((prev) => ({
      ...prev,
      value: !prev.value,
    }))
  }, [setState])

  return [state, toggle]
}

export default useRecoilToggle
