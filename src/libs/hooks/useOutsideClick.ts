import { RefObject, useEffect } from 'react'

type UseOutsideFuncType = (
  ref: RefObject<HTMLDivElement>,
  close: () => void,
) => () => void

export const useOutsideClick: UseOutsideFuncType = (ref, close) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, close])

  return () => {}
}
