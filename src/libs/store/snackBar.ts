import { SnackBarVariantType } from '@components/atoms/SnackBar'
import { atom } from 'recoil'

export type SnackBarStateType = {
  variant: SnackBarVariantType
  message: string
  isSnackBarOn: boolean
}

const initialState: SnackBarStateType = {
  variant: 'complete',
  message: '',
  isSnackBarOn: false,
}

export const snackBarState = atom<SnackBarStateType>({
  key: 'snackBarState',
  default: initialState,
})
