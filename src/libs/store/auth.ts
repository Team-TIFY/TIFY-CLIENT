import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { AuthStateType } from '@models/stores/auth'

const { persistAtom } = recoilPersist()

const initialState: AuthStateType = {
  isAuthenticated: false,
  loginType: 'KAKAO',
  callbackUrl: '/',
  accessToken: '',
  userProfile: {
    id: 0,
    userName: '',
    userId: '',
    imageUrl: '',
    email: '',
    birth: '',
    job: '',
    createdAt: '',
    gender: '',
    onBoardingStatus: '',
  },
}

export const authState = atom<AuthStateType>({
  key: 'authState',
  default: initialState,
  effects_UNSTABLE: [persistAtom],
})
