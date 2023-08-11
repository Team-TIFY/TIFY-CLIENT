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
}

const initialPageState: OnboardingPageType = {
  agreement: false,
  info: {
    name: false,
    userId: false,
    birth: false,
    gender: false,      
  },
  interestStart: false,
}

export const onboardingPageState = atom<OnboardingPageType>({
    key: 'onboardingPageState',
    default: initialPageState,
})


export const isBtnColorState = atom({
  key: 'isBtnColorState',
  default: false,
})