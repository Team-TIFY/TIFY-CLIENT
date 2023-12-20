import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Category } from '@components/atoms/Category'
import { ColorIndexVariant, Tag } from '@components/atoms/Tag'
import {
  FilteredUserTag,
  SelectedProps,
  SubCategoryName,
  SubCategoryType,
} from '@utils/apis/user/UserType'
import { getTagAnswerData } from '@utils/getTagAnswerData'
import { useNavigate } from 'react-router-dom'
import { questionMenu } from '@utils/questionMenu'

export interface UserTagDataProps {
  selectedProps: SelectedProps
  userTagData: FilteredUserTag[]
  isFriend: boolean
}

export const UserTagDataListItem = ({
  selectedProps,
  userTagData,
  isFriend,
}: UserTagDataProps) => {
  const navigate = useNavigate()

  const handleClickPlusButton = (
    categoryName: SubCategoryName,
    smallCategory: string,
    categoryValue: SubCategoryType,
  ) => {
    if (categoryName === '프레그런스' && smallCategory === 'PERFUME') {
      navigate(questionMenu[categoryValue][0])
    } else if (categoryName === '프레그런스' && smallCategory === 'MOISTURE') {
      navigate(questionMenu[categoryValue][1])
    } else if (categoryName === '프레그런스' && smallCategory === 'PLACE') {
      navigate(questionMenu[categoryValue][2])
    } else {
      navigate(questionMenu[categoryValue])
    }
  }

  const renderUserTagDataListItem = () => {
    return getTagAnswerData(userTagData)
      ?.filter((tag) => tag.length !== 0)
      ?.map((tag, idx) => {
        const matchingProp = selectedProps.find(
          (selectedProp) => selectedProp.value === tag[0]?.smallCategory,
        )
        const categoryName = matchingProp
          ? matchingProp.name
          : ('' as SubCategoryName)
        const categoryValue = matchingProp?.value ?? ('' as SubCategoryType)
        const smallCategory = tag[1].smallCategory ?? tag[0].smallCategory
        const allCategoryAnswered = tag[0]?.allDetailCategoryAnswered

        return (
          <Category
            key={idx}
            categoryName={categoryName}
            isFriend={isFriend}
            allCategoryAnswered={allCategoryAnswered}
            onPlusButtonClick={() =>
              handleClickPlusButton(categoryName, smallCategory, categoryValue)
            }
            children={tag.map((tagData, index) =>
              tagData.answer ? (
                <Tag
                  key={index}
                  colorIndex={(index % 3) as ColorIndexVariant}
                  iconIndex={tagData.number}
                  children={tagData.answer}
                  smallCategory={tagData.smallCategory}
                  detailCategory={tagData.detailCategory}
                  answerNumber={tagData.number}
                />
              ) : null,
            )}
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
