import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export type ProfileState = {
  value: boolean
}

const initialState: ProfileState = {
  value: true,
}

export const profileState = atom<ProfileState>({
  key: 'profileState',
  default: initialState,
  effects_UNSTABLE: [persistAtom],
})
