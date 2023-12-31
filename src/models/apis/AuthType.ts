export type OauthCodeResponseType = {
  accessToken: string
  refreshToken: string
  idToken: string
}

export type OauthLoginResponseType = {
  accessToken: string
  refreshToken: string
  userId: number
}

export type OauthRegisterResponseType = {
  email: string
  phoneNumber: string
  profileImage: string
  name: string
}
