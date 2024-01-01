import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { authState } from '@libs/store/auth'
import { UserApi } from '@apis/UserApi'
import { UserNewTasteCategoryType } from '@models/apis/UserType'
import { profileQueryKeys } from '@constants/queryKeys/profileQueryKeys'
import {
  BEUTY_CATEGORY_END_INDEX,
  BEUTY_CATEGORY_START_INDEX,
  FASHION_CATEGORY_END_INDEX,
  FASHION_CATEGORY_START_INDEX,
  HOBBY_CATEGORY_END_INDEX,
  HOBBY_CATEGORY_START_INDEX,
} from '@constants/profile/newTasteCategoryIndex'
import { Padding } from '@components/layouts/Padding'
import { Spacing } from '@components/atoms/Spacing'
import NewTasteCategory from '@components/profile/NewTaste/NewTasteCategory'

const NewTaste = () => {
  const auth = useRecoilValue(authState)

  const { data: isAnsweredQuestion = [] } = useQuery(
    [profileQueryKeys.NEW_TASTE_ISANSWERED_CATEGORY, auth.userProfile.id],
    () => UserApi.GET_ISANSWERED_QUESTION(),
  )

  const getSubCategoryList = (
    startIndex: number,
    endIndex: number,
  ): UserNewTasteCategoryType[] => {
    return isAnsweredQuestion?.slice(startIndex, endIndex)
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
          subCategoryList={getSubCategoryList(
            BEUTY_CATEGORY_START_INDEX,
            BEUTY_CATEGORY_END_INDEX,
          )}
        />
        <Spacing height={24} />
        <NewTasteCategory
          categoryName="패션"
          subCategoryList={getSubCategoryList(
            FASHION_CATEGORY_START_INDEX,
            FASHION_CATEGORY_END_INDEX,
          )}
        />
        <Spacing height={24} />
        <NewTasteCategory
          categoryName="취미"
          subCategoryList={getSubCategoryList(
            HOBBY_CATEGORY_START_INDEX,
            HOBBY_CATEGORY_END_INDEX,
          )}
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
