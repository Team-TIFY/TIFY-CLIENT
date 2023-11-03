import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import NewTasteCategoryList from './NewTasteCategoryList'
import { UserNewTasteCategory } from '@utils/apis/user/UserType'

const NewTasteCategory = ({
  categoryName,
  subCategoryList,
}: {
  categoryName: string
  subCategoryList: UserNewTasteCategory[]
}) => {
  return (
    <>
      <Text typo="Headline_16" as="div" color="white">
        {categoryName}
      </Text>
      <Spacing height={20} />
      <NewTasteCategoryList subCategoryList={subCategoryList} />
    </>
  )
}

export default NewTasteCategory
