export interface UserInfo {
  userId: number
  userName: string
  imageUrl: string
  birth: string
  job: string
  gender: string
  createdAt: string
  onBoardingStatus: string
}

export interface UserTag {
  userTagId: number
  largeCategory: string
  favors: {
    userFavorId: number
    smallCategory: string
  }[]
}

export interface FilteredUserTag {
  userFavorId: number
  smallCategory: string
}

export interface SelectedTag {
  name: SubCategoryName
  value: SubCategoryType
}

export type SelectedProps = {
  id: number
  active: boolean
  name: SubCategoryName
  value: SubCategoryType
}[]

export interface UserNewTasteCategory {
  smallCategory: SubCategoryType
  isAnswered: boolean
}

export interface IsAnsweredCategory {
  detailCategory: SubCategoryType
  answered: boolean
}

export type SubCategoryType =
  | 'MAKEUP'
  | 'FRAGRANCE'
  | 'CLOTHES'
  | 'FASHION_PRODUCT'
  | 'BAG'
  | 'ACCESSORY'
  | 'COOKING'
  | 'EXERCISE'
  | 'TRAVEL'
  | 'CULTURE_LIFE'

export type SubCategoryName =
  | '메이크업'
  | '프레그런스'
  | '의류'
  | '패션소품'
  | '가방'
  | '액세사리'
  | '요리'
  | '운동'
  | '여행'
  | '문화생활'
