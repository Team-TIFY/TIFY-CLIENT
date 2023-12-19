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
import { useEffect, useState } from 'react'

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
    return getTagAnswerData(userTagData)
      ?.filter((tag) => tag.length !== 0)
      ?.map((tag, idx) => {
        const matchingProp = selectedProps.find(
          (selectedProp) => selectedProp.value === tag[0]?.smallCategory,
        )
        const categoryName = matchingProp ? matchingProp.name : ''

        return (
          <Category
            key={idx}
            categoryName={categoryName}
            children={tag.map((tagData, index) => (
              <Tag
                key={index}
                colorIndex={(index % 6) as ColorIndexVariant}
                iconIndex={tagData.number}
                children={tagData.answer}
                smallCategory={tagData.smallCategory}
                detailCategory={tagData.detailCategory}
              />
            ))}
            isFriend={isFriend}
          />
        )
      })
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
