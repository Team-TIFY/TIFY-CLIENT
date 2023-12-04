import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Category } from '@components/atoms/Category'
import { indexVariant, Tag } from '@components/atoms/Tag'
import {
  FilteredUserTag,
  SelectedProps,
  SelectedTag,
} from '@utils/apis/user/UserType'

export interface UserTagDataProps {
  selectedTags: SelectedTag[]
  selectedProps: SelectedProps
  userTagData: FilteredUserTag[]
  isFriend: boolean
}

export const UserTagDataListItem = ({
  selectedTags,
  selectedProps,
  userTagData,
  isFriend,
}: UserTagDataProps) => {
  const renderUserTagDataListItem = () => {
    return userTagData.map((tag, idx) =>
      tag.answerContentList?.length ? (
        <Category
          key={idx}
          categoryName={selectedProps[idx]?.name}
          children={tag?.answerContentList?.map((tagData, index) => (
            <Tag key={index} index={index as indexVariant} children={tagData} />
          ))}
          isFriend={isFriend}
        />
      ) : null,
    )
  }

  return (
    <CategoryWrapper>
      <FlexBox direction="column" gap={20}>
        {renderUserTagDataListItem()}
      </FlexBox>
      <Spacing height={48} />
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div``