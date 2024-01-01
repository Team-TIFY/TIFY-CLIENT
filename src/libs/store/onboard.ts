import { atom } from 'recoil'

import {
  OnboardingBtnType,
  OnboardingPageType,
  OnboardingType,
} from '@models/stores/onboard'

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
