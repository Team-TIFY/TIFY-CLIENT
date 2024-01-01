import { atom } from 'recoil'

import { FilterType, PriceType } from '@models/stores/present'

const initialFilterState: FilterType = {
  filter: '추천순',
  filterValue: 'DEFAULT',
}

export const FilterState = atom<FilterType>({
  key: 'filterState',
  default: initialFilterState,
})

const initialPriceState: PriceType = {
  price: '가격',
  priceValue: 'DEFAULT',
}

export const PriceState = atom<PriceType>({
  key: 'priceState',
  default: initialPriceState,
})

export const isFilterTypeState = atom({
  key: 'isFilterTypeState',
  default: '',
})
