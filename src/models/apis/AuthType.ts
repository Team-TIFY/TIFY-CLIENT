export type OauthCodeResponseType = {
  accessToken: string
  refreshToken: string
  idToken: string
}

export type OauthLoginResponse = {
  accessToken: string
  refreshToken: string
  userId: number
}

export type OauthRegisterResponse = {
  email: string
  phoneNumber: string
  profileImage: string
  name: string
}
