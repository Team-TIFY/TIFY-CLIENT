import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import CubeButton from '@components/atoms/CubeButton'
import {
  IsAnsweredCategory,
  UserNewTasteCategory,
} from '@utils/apis/user/UserType'
import { subCategoryState } from '@libs/store/subCategory'
import { UserApi } from '@utils/apis/user/UserApi'
import parseTotasteQuestion from '@utils/parseTotasteQuestion'
import { subCategoryTitle } from '@utils/subCategoryTitle'

interface NewTasteCategoryListItemProps {
  subCategoryList: UserNewTasteCategory[]
}

const NewTasteCategoryListItem = ({
  subCategoryList,
}: NewTasteCategoryListItemProps) => {
  const [subCategory, setSubCategory] = useRecoilState(subCategoryState)

  const navigate = useNavigate()

  const handleClickSubCategory = async (category: UserNewTasteCategory) => {
    const answerList = await fetchAnswerList(category)
    routeToNotAnsweredCategory(answerList)
  }

  const fetchAnswerList = async (category: UserNewTasteCategory) => {
    const answerList = await UserApi.GET_SMALL_CATEGORY_ISANSWERED_QUESTION(
      category.smallCategory,
    )

    return answerList
  }

  const routeToNotAnsweredCategory = (answerList: IsAnsweredCategory[]) => {
    if (answerList.filter((data) => data.answered === false).length) {
      const favorQuestionCategory = answerList.filter(
        (data) => data.answered === false,
      )[0].detailCategory
      setSubCategory(favorQuestionCategory)
      const routerName = parseTotasteQuestion(favorQuestionCategory)
      routerName && navigate(routerName)
    }
  }

  const getVariant = (category: UserNewTasteCategory) => {
    return category.isAnswered === true
      ? 'disabled'
      : subCategory === category.smallCategory
      ? 'selected'
      : 'unSelected'
  }

  return (
    <StyledButtonWrapper>
      {Array.isArray(subCategoryList) &&
        subCategoryList?.map((category: UserNewTasteCategory, idx: number) => (
          <CubeButton
            key={idx}
            onClick={() => handleClickSubCategory(category)}
            variant={getVariant(category)}
            text={subCategoryTitle[category.smallCategory]?.['title']}
            img={subCategoryTitle[category.smallCategory]?.['img']}
          />
        ))}
    </StyledButtonWrapper>
  )
}

export default NewTasteCategoryListItem

const StyledButtonWrapper = styled(FlexBox)`
  gap: 12px;
  justify-content: flex-start;
  flex-wrap: wrap;
`
