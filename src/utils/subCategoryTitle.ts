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
    img: '/images/cup.png',
  },
  EXERCISE: {
    title: '운동',
    img: '/images/exercise.png',
  },
  DIGITAL_PRODUCT: {
    title: '패션소품',
    img: '/images/keyring.png',
  },
}
