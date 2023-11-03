import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Category } from '@components/atoms/Category'
import { indexVariant, Tag } from '@components/atoms/Tag'
import {
  FilteredUserTag,
  SelectedTag,
  UserTag,
} from '@utils/apis/user/UserType'

export interface UserTagDataProps {
  selectedTags: SelectedTag[]
  filteredUserTagData: FilteredUserTag[][]
  userTagData: UserTag[]
  isFriend: boolean
}

export const UserTagDataListItem = ({
  selectedTags,
  filteredUserTagData,
  userTagData,
  isFriend,
}: UserTagDataProps) => {
  const renderUserTagDataListItem = () => {
    return selectedTags.length > 0
      ? filteredUserTagData.map((tag, idx) => (
          <Category
            key={idx}
            categoryName={selectedTags[idx].name}
            children={tag.map((tagData, index) => (
              <Tag
                key={tagData.answerId}
                index={index as indexVariant}
                children={tagData.smallCategory}
              />
            ))}
            isFriend={isFriend}
          />
        ))
      : userTagData.map((category) => (
          <Category
            key={category.userTagId}
            categoryName={category.largeCategory}
            children={category.favors.map((tag, index) => (
              <Tag
                key={tag.userFavorId}
                index={index as indexVariant}
                children={tag.smallCategory}
              />
            ))}
            isFriend={isFriend}
          />
        ))
  }

  return (
    <CategoryWrapper>
      <FlexBox direction="column" gap={20}>
        {renderUserTagDataListItem()}
      </FlexBox>
      <Spacing height={32} />
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div``
