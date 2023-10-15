import { UserInfo } from '@utils/apis/user/UserType'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export interface AuthStateType {
  isAuthenticated: boolean
  callbackUrl: string
  accessToken: string
  userProfile: UserInfo
  //TODO: 추후 지워야
}

const initialState: AuthStateType = {
  isAuthenticated: false,
  callbackUrl: '/',
  accessToken: '',
  userProfile: {
    userId: 0,
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
