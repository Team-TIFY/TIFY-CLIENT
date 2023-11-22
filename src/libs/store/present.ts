import { atom } from 'recoil'

export interface filterType {
  filter: string
  filterValue: string
}

const initialFilterState: filterType = {
  filter: '추천순',
  filterValue: 'DEFAULT',
}

export const FilterState = atom<filterType>({
  key: 'filterState',
  default: initialFilterState,
})

export interface priceType {
  price: string
  priceValue: string
}

const initialPriceState: priceType = {
  price: '가격',
  priceValue: 'DEFAULT',
}

export const PriceState = atom<priceType>({
  key: 'priceState',
  default: initialPriceState,
})
