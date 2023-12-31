export type OnboardRequestType = {
  username: string
  id: string
  birth: string
  gender: string
  onBoardingState: string
  userFavorDtoList: string[]
}

export type OnboardingType = {
  username: string
  id: string
  birth: string
  gender: string
  onBoardingState: string
  favor: string[]
}

export type OnboardingPageType = {
  agreement: boolean
  info: {
    username: boolean
    id: boolean
    birth: boolean
    gender: boolean
  }
  interestStart: boolean
  onboardStatus: boolean
  favor: boolean
}

export type OnboardingBtnType = {
  username: boolean
  id: boolean
  birth: boolean
  gender: boolean
}
