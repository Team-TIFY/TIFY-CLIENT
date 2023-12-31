import { RefObject, useEffect, useRef } from 'react'

import { UseOutsideFuncType } from '@models/hooks/useOutsideClick'

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
