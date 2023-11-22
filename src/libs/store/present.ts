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

export interface priceType {
  price: string
}

export const PriceState = atom<filterType>({
  key: 'priceState',
  default: {
    filter: '가격',
  },
})
