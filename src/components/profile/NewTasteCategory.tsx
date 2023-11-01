/* eslint-disable prettier/prettier */
import CubeButton from '@components/atoms/CubeButton'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { subCategoryState } from '@libs/store/subCategory'
import { SubCategoryName, SubCategoryType, UserNewTasteCategory } from '@utils/apis/user/UserType'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import parseTotasteQuestion from '@utils/parseTotasteQuestion'
import { UserApi } from '@utils/apis/user/UserApi'

interface NewTasteCategoryProps {
  subCategoryList: UserNewTasteCategory[]
}

const subCategoryTitle: Record<SubCategoryType, { title: SubCategoryName; img: string }> = {
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
  const navigate = useNavigate()

  const handleClickSubCategory = async (category: UserNewTasteCategory) => {
    const answerList = await UserApi.GET_SMALL_CATEGORY_ISANSWERED_QUESTION(category.smallCategory)
    if(answerList.filter((data) => data.answered === false).length){
      const favorQuestionCategory = answerList.filter((data)=> data.answered === false)[0].detailCategory
      setSubCategory(favorQuestionCategory)
      const routerName = parseTotasteQuestion(favorQuestionCategory)
      if(routerName){
        navigate(routerName)
      }
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
