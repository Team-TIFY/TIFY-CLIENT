import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Category } from '@components/atoms/Category'
import { ColorIndexVariant, Tag } from '@components/atoms/Tag'
import {
  FilteredUserTag,
  SelectedProps,
  SelectedTag,
} from '@utils/apis/user/UserType'
import { getTagAnswerData } from '@utils/getTagAnswerData'

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
    console.log(getTagAnswerData(userTagData))

    return getTagAnswerData(userTagData)?.map((tag, idx) => (
      <Category
        key={idx}
        categoryName={selectedProps[idx]?.name}
        children={tag.map((tagData, index) => (
          <Tag
            key={index}
            colorIndex={(index % 6) as ColorIndexVariant}
            iconIndex={tagData.number}
            children={tagData.answer}
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
      <Spacing height={48} />
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div``
