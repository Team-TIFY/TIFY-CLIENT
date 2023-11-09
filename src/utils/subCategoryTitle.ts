import { SubCategoryType, SubCategoryName } from './apis/user/UserType'

export const subCategoryTitle: Record<
  SubCategoryType,
  { title: SubCategoryName; img: string }
> = {
  MAKEUP: {
    title: '메이크업',
    img: '/images/makeup.png',
  },
  FRAGRANCE: {
    title: '프레그런스',
    img: '/images/fragrance.png',
  },
  CLOTHES: {
    title: '의류',
    img: '/images/clothes.png',
  },
  FASHION_PRODUCT: {
    title: '패션소품',
    img: '/images/fashionStuff.png',
  },
  BAG: {
    title: '가방',
    img: '/images/fashionStuff.png',
  },
  ACCESSORY: {
    title: '액세사리',
    img: '/images/fashionStuff.png',
  },
  COOKING: {
    title: '요리',
    img: '/images/cooking.png',
  },
  EXERCISE: {
    title: '운동',
    img: '/images/exercise.png',
  },
  TRAVEL: {
    title: '여행',
    img: '/images/travel.png',
  },
  CULTURE_LIFE: {
    title: '문화생활',
    img: '/images/culturalLife.png',
  },
}
