/* eslint-disable prettier/prettier */
import CubeButton from '@components/atoms/CubeButton'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { subCategoryState } from '@libs/store/user'
import { subCategoryName, subCategoryType, UserNewTasteCategory } from '@libs/types/UserType'
import { useRecoilState } from 'recoil'

interface NewTasteCategoryProps {
  subCategoryList: UserNewTasteCategory[]
}

const subCategoryTitle: Record<subCategoryType, { title: subCategoryName; img: string }> = {
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

const NewTasteCategory = ({ subCategoryList }: NewTasteCategoryProps) => {
  const [subCategory, setSubCategory] = useRecoilState(subCategoryState)

  const handleClickSubCategory = (category: UserNewTasteCategory) => {
    if (category.isAnswered === true) {
      return
    } else {
      setSubCategory(category.smallCategory)
    }
  }

  return (
    <StyledButtonWrapper>
      {subCategoryList?.map((category, idx) => (
        <CubeButton
          key={idx}
          onClick={() => handleClickSubCategory(category)}
          variant={
            category.isAnswered === true
              ? 'disabled'
              : subCategory === category.smallCategory
                ? 'selected'
                : 'unSelected'
          }
          text={subCategoryTitle[category.smallCategory]['title']}
          img={subCategoryTitle[category.smallCategory]['img']}
        />
      ))}
    </StyledButtonWrapper>
  )
}

export default NewTasteCategory

const StyledButtonWrapper = styled(FlexBox)`
  gap: 12px;
  justify-content: flex-start;
  flex-wrap: wrap;
`
