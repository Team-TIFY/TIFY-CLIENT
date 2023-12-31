export interface OauthCodeResponse {
  accessToken: string
  refreshToken: string
  idToken: string
}
export interface OauthLoginResponse {
  accessToken: string
  refreshToken: string
  userId: number
}

export interface OauthRegisterResponse {
  email: string
  phoneNumber: string
  profileImage: string
  name: string
}
