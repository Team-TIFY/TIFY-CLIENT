import { ReactNode, RefObject } from 'react'

export type BottomSheetPropsType = {
  children?: ReactNode
  isexpanded: boolean
  bottomSheetRef: RefObject<HTMLDivElement>
  filterType?: string
}
