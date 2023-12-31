import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { UserNewTasteCategoryType } from '@models/apis/UserType'
import NewTasteCategoryList from './NewTasteCategoryListItem'

const NewTasteCategory = ({
  categoryName,
  subCategoryList,
}: {
  categoryName: string
  subCategoryList: UserNewTasteCategoryType[]
}) => {
  return (
    <>
      <Text typo="Headline_16" as="div" color="white">
        {categoryName}
      </Text>
      <Spacing height={20} />
      <NewTasteCategoryList subCategoryList={subCategoryList} />
      <Spacing height={48} />
    </>
  )
}

export default NewTasteCategory
