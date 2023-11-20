import { atom } from 'recoil'

export interface filterType {
  filter: string
}

export const FilterState = atom<filterType>({
  key: 'filterState',
  default: {
    filter: '추천순',
  },
})
