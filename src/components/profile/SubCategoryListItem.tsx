import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import CubeButton from '@components/atoms/CubeButton'
import { subCategoryState } from '@libs/store/subCategory'
import { UserApi } from '@utils/apis/user/UserApi'
import {
  IsAnsweredCategory,
  UserNewTasteCategory,
} from '@utils/apis/user/UserType'
import parseTotasteQuestion from '@utils/parseTotasteQuestion'
import { subCategoryTitle } from '@utils/subCategoryTitle'

const SubCategoryListItem = (subCategoryList: {
  subCategoryList: UserNewTasteCategory[]
}) => {
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
    <>
      {Array.isArray(subCategoryList) &&
        subCategoryList?.map((category: UserNewTasteCategory, idx: number) => (
          <CubeButton
            key={idx}
            onClick={() => handleClickSubCategory(category)}
            variant={getVariant(category)}
            text={subCategoryTitle[category.smallCategory]['title']}
            img={subCategoryTitle[category.smallCategory]['img']}
          />
        ))}
    </>
  )
}

export default SubCategoryListItem
