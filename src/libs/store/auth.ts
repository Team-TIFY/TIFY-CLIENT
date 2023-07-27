import { atom } from "recoil";
export interface AuthStateType {
    isAuthenticated: boolean;
    callbackUrl: string;
    accessToken: string;
    userId: number;
}

const initialState: AuthStateType = {
    isAuthenticated: false,
    callbackUrl: '/',
    accessToken: '',
    userId: 0
  };

export const authState = atom<AuthStateType>({
    key: 'authState',
    default: initialState,
});
  