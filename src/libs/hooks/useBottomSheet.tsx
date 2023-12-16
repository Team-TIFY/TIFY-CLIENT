import { useState, useEffect, useRef } from 'react'

const useBottomSheet = ({
  initialState,
  delaytime,
}: {
  initialState: boolean
  delaytime?: number
}) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(initialState)
  const bottomSheetRef = useRef<HTMLDivElement>(null)
  const openBottomSheet = () => {
    setBottomSheetOpen(true)
  }

  const closeBottomSheet = () => {
    setBottomSheetOpen(false)
  }

  useEffect(() => {
    if (delaytime) {
      setTimeout(() => {
        closeBottomSheet()
      }, delaytime)
    }
  }, [])

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      bottomSheetRef.current &&
      !bottomSheetRef.current.contains(event.target as Node)
    ) {
      closeBottomSheet()
    }
  }

  useEffect(() => {
    if (isBottomSheetOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isBottomSheetOpen])

  return {
    isBottomSheetOpen,
    openBottomSheet,
    closeBottomSheet,
    bottomSheetRef,
  }
}

export default useBottomSheet
