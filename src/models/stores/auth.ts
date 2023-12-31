import { UserInfoTokenType } from '@models/apis/UserType'

export type AuthStateType = {
  isAuthenticated: boolean
  loginType: 'APPLE' | 'KAKAO'
  callbackUrl: string
  accessToken: string
  userProfile: UserInfoTokenType
}
