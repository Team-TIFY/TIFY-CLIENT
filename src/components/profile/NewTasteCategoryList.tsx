import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import SubCategoryListItem from './SubCategoryListItem'
import { UserNewTasteCategory } from '@utils/apis/user/UserType'

interface NewTasteCategoryProps {
  subCategoryList: UserNewTasteCategory[]
}

const NewTasteCategoryList = ({ subCategoryList }: NewTasteCategoryProps) => {
  return (
    <StyledButtonWrapper>
      <SubCategoryListItem subCategoryList={subCategoryList} />
    </StyledButtonWrapper>
  )
}

export default NewTasteCategoryList

const StyledButtonWrapper = styled(FlexBox)`
  gap: 12px;
  justify-content: flex-start;
  flex-wrap: wrap;
`
