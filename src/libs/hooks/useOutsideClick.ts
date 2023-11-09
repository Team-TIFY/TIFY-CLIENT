import { MouseEventHandler, RefObject, useEffect, useRef } from 'react'

type UseOutsideFuncType = (
  close: () => void,
) => [RefObject<HTMLDivElement>, MouseEventHandler<HTMLDivElement>]

export const useOutsideClick: UseOutsideFuncType = (close) => {
  const outsideRef: RefObject<HTMLDivElement> = useRef(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      outsideRef.current &&
      outsideRef.current.contains(event.target as Node)
    ) {
      close()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [outsideRef, close])

  return [outsideRef, () => handleClickOutside]
}
