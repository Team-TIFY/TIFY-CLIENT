import { atom } from "recoil";

export interface OnboardingType {
  username: string;
  id: string;
  birth: string;
  gender: string;
  onBoardingState: string,
  beautyFavor: string,
  fashionFavor: string,
  hobbyFavor: string,
  [key: string]: string;
}

const initialState: OnboardingType = {
  username: "",
  id: "",
  birth: "",
  gender: "",
  onBoardingState: "",
  beautyFavor: "",
  fashionFavor: "",
  hobbyFavor: "",
}

export const onboardingState = atom<OnboardingType>({
    key: 'onboardingState',
    default: initialState,
})


export interface OnboardingPageType {
  agreement: boolean,
  info: {
    name: boolean,
    userId: boolean,
    birth: boolean,
    gender: boolean,
  },
  interestStart: boolean,
  onboardStatus: boolean,
  favor: boolean,
}

const initialPageState: OnboardingPageType = {
  agreement: false,
  info: {
    name: false,
    userId: false,
    birth: false,
    gender: false,      
  },
  interestStart:false,
  onboardStatus: false,
  favor:false,
}

export const onboardingPageState = atom<OnboardingPageType>({
    key: 'onboardingPageState',
    default: initialPageState,
})


export const isBtnColorState = atom({
  key: 'isBtnColorState',
  default: false,
})

export const isSearchInputState = atom({
  key: 'isSearchInputState',
  default:'',
})

export const isSearchActiveBtn = atom({
  key: 'isSearchActiveBtn',
  default:-1,
})

export const isCancelState = atom({
  key: 'isCancelState',
  default:false,
})