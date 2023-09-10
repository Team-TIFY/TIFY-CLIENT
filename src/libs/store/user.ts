import { subCategoryType } from '@libs/types/UserType'
import { atom } from 'recoil'

export interface UserStateType {
  userId: number
  userName: string
  imageUrl: string
  birth: string
  job: string
  createdAt: Date
  gender: string
}

const initialState: UserStateType = {
  userId: 0,
  userName: '',
  imageUrl: '',
  birth: '',
  job: '',
  createdAt: new Date(),
  gender: '',
}

export const userState = atom<UserStateType>({
  key: 'userState',
  default: initialState,
})

export const subCategoryState = atom<subCategoryType | ''>({
  key: 'subCategoryState',
  default: '',
})
