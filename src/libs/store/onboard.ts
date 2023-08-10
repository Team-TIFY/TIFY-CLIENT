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