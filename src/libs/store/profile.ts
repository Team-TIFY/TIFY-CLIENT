import { atom } from 'recoil'

export type ProfileState = {
  value: boolean
  isMenuOpen: boolean
  isEdit: boolean
  buttonText: string
}

const initialState: ProfileState = {
  value: true,
  isMenuOpen: false,
  isEdit: false,
  buttonText: '수정 완료',
}

export const profileState = atom<ProfileState>({
  key: 'profileState',
  default: initialState,
})
