/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'
import { Category } from '@components/atoms/Category'
import { Spacing } from '@components/atoms/Spacing'
import { indexVariant, Tag } from '@components/atoms/Tag'
import { FlexBox } from '@components/layouts/FlexBox'
import { FilteredUserTag, SelectedTag, UserTag } from '@utils/apis/user/UserType'

export interface UserTagDataProps {
  selectedTags: SelectedTag[]
  filteredUserTagData: FilteredUserTag[][]
  userTagData: UserTag[]
}

export const UserTagData = ({ selectedTags, filteredUserTagData, userTagData }: UserTagDataProps) => {
  return (
    <CategoryWrapper>
      <FlexBox direction="column" gap={20}>
        {selectedTags.length > 0
          ? filteredUserTagData.map((tag, idx) => (
            <Category
              key={idx}
              categoryName={selectedTags[idx].name}
              children={tag.map((tagData, index) => (
                <Tag key={tagData.userFavorId} index={index as indexVariant} children={tagData.smallCategory} />
              ))}
            />
          ))
          : userTagData.map((category) => (
            <Category
              key={category.userTagId}
              categoryName={category.largeCategory}
              children={category.favors.map((tag, index) => (
                <Tag key={tag.userFavorId} index={index as indexVariant} children={tag.smallCategory} />
              ))}
            />
          ))}
      </FlexBox>
      <Spacing height={32} />
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div``
