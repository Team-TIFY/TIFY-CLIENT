import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export interface AuthStateType {
  isAuthenticated: boolean
  callbackUrl: string
  accessToken: string
  userId: number
  userName: string
}

const initialState: AuthStateType = {
  isAuthenticated: false,
  callbackUrl: '/',
  accessToken: '',
  userId: 0,
  userName: '',
}

export const authState = atom<AuthStateType>({
  key: 'authState',
  default: initialState,
  effects_UNSTABLE: [persistAtom],
})
