import { atom } from 'recoil'

export type ProfileState = {
  value: boolean
  isMenuOpen: boolean
}

const initialState: ProfileState = {
  value: true,
  isMenuOpen: false,
}

export const profileState = atom<ProfileState>({
  key: 'profileState',
  default: initialState,
})
