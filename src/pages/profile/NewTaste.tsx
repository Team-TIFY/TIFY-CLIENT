import { useRecoilValue } from 'recoil'
import { theme } from '@styles/theme'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'
import { Padding } from '@components/layouts/Padding'
import { Spacing } from '@components/atoms/Spacing'
import NewTasteCategory from '@components/profile/NewTaste/NewTasteCategory'
import { authState } from '@libs/store/auth'
import { UserApi } from '@utils/apis/user/UserApi'
import { UserNewTasteCategory } from '@utils/apis/user/UserType'

const NewTaste = () => {
  const auth = useRecoilValue(authState)
  const { data: isAnsweredQuestion } = useQuery(
    ['newTasteCategory', auth.userProfile.id],
    () => UserApi.GET_ISANSWERED_QUESTION(),
  )

  const getSubCategoryList = (startIndex: number, endIndex: number) => {
    return isAnsweredQuestion?.slice(
      startIndex,
      endIndex,
    ) as UserNewTasteCategory[]
  }

  return (
    <>
      <Padding>
        <Spacing height={32} />
        <TextWrapper>
          취향을 찾고 싶은 <br />
          카테고리를 골라주세요
        </TextWrapper>
        <Spacing height={48} />
        <NewTasteCategory
          categoryName="뷰티"
          subCategoryList={getSubCategoryList(0, 2)}
        />
        <Spacing height={24} />
        <NewTasteCategory
          categoryName="패션"
          subCategoryList={getSubCategoryList(2, 6)}
        />
        <Spacing height={24} />
        <NewTasteCategory
          categoryName="취미"
          subCategoryList={getSubCategoryList(6, 10)}
        />
      </Padding>
    </>
  )
}

export default NewTaste

const TextWrapper = styled.div`
  ${theme.typo.SCD_Headline_20};
  color: ${theme.palette.gray_100};
`
