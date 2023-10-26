import { UserInfo, UserInfoToken } from '@utils/apis/user/UserType'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export interface AuthStateType {
  isAuthenticated: boolean
  callbackUrl: string
  accessToken: string
  userProfile: UserInfoToken
}

const initialState: AuthStateType = {
  isAuthenticated: false,
  callbackUrl: '/',
  accessToken: '',
  userProfile: {
    id: 0,
    userName: '',
    imageUrl: '',
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
