import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Category } from '@components/atoms/Category'
import { Tag } from '@components/atoms/Tag'
import { ColorIndexVariantType } from '@models/components/atoms/Tag'
import { FilteredUserTag, SelectedProps } from '@models/apis/UserType'
import { getTagAnswerData } from '@utils/getTagAnswerData'
import { useNavigate } from 'react-router-dom'
import { questionMenu } from '@utils/questionMenu'
import { useSetRecoilState } from 'recoil'
import { friendState } from '@libs/store/friend'
import { question } from '@utils/question'
import { TasteBoxVariantType } from '@models/apis/TasteType'
import { SubCategoryNameType, SubCategoryValueType } from '@models/favor'

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
  const setFriendStateData = useSetRecoilState(friendState)

  const handleClickPlusButton = (
    notAnsweredDetailCategories: TasteBoxVariantType[],
  ) => {
    console.log(notAnsweredDetailCategories)

    navigate(`/profile/newTaste/${question[notAnsweredDetailCategories[0]]}`)
  }

  const handleClickPresentButton = (categoryValue: SubCategoryValueType) => {
    setFriendStateData((prevStateData) => ({
      ...prevStateData,
      presentRecommendFilterValue: categoryValue,
    }))

    navigate('/friends/presentRecommend')
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
          : ('' as SubCategoryNameType)
        const categoryValue =
          matchingProp?.value ?? ('' as SubCategoryValueType)
        const notAnsweredDetailCategories = tag[0]?.notAnsweredDetailCategories

        return (
          <Category
            key={idx}
            categoryName={categoryName}
            isFriend={isFriend}
            allCategoryAnswered={notAnsweredDetailCategories.length === 0}
            onPlusButtonClick={() =>
              handleClickPlusButton(notAnsweredDetailCategories)
            }
            onPresentButtonClick={() => handleClickPresentButton(categoryValue)}
            children={tag.map((tagData, index) =>
              tagData.answer ? (
                <Tag
                  key={index}
                  colorIndex={(index % 3) as ColorIndexVariantType}
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
