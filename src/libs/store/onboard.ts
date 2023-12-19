import { atom } from 'recoil'

export interface OnboardRequest {
  username: string
  id: string
  birth: string
  gender: string
  onBoardingState: string
}

export interface OnboardingType {
  username: string
  id: string
  birth: string
  gender: string
  onBoardingState: string
  favor: string[]
}

const initialState: OnboardingType = {
  username: '',
  id: '',
  birth: '',
  gender: '',
  onBoardingState: '',
  favor: [],
}

export const onboardingState = atom<OnboardingType>({
  key: 'onboardingState',
  default: initialState,
})

export interface OnboardingPageType {
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

const initialPageState: OnboardingPageType = {
  agreement: false,
  info: {
    username: false,
    id: false,
    birth: false,
    gender: false,
  },
  interestStart: false,
  onboardStatus: false,
  favor: false,
}

export const onboardingPageState = atom<OnboardingPageType>({
  key: 'onboardingPageState',
  default: initialPageState,
})

export const pageTempState = atom({
  key: 'pageTempState',
  default: '',
})

export interface OnboardingBtnType {
  username: boolean
  id: boolean
  birth: boolean
  gender: boolean
}

const initialBtnState: OnboardingBtnType = {
  username: false,
  id: false,
  birth: false,
  gender: false,
}

export const isBtnColorState = atom({
  key: 'isBtnColorState',
  default: initialBtnState,
})

export const isSearchInputState = atom({
  key: 'isSearchInputState',
  default: '',
})

export const isSearchActiveBtn = atom({
  key: 'isSearchActiveBtn',
  default: -1,
})

export const isCancelState = atom({
  key: 'isCancelState',
  default: false,
})

export const IsOnboard = atom({
  key: 'IsOnboard',
  default: true,
})
