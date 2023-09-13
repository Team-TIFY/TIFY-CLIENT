export interface KakaoCodeResponse {
  accessToken: string
  refreshToken: string
  idToken: string
}
export interface KakaoLoginResponse {
  accessToken: string
  refreshToken: string
  userId: number
}

export interface KakaoRegisterResponse {
  email: string
  phoneNumber: string
  profileImage: string
  name: string
}
