import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import { Category } from '@components/atoms/Category'
import { Tag } from '@components/atoms/Tag'
import { ColorIndexVariantType } from '@models/components/atoms/Tag'
import {
  FilteredUserTag,
  SelectedProps,
  SubCategoryName,
  SubCategoryType,
} from '@utils/apis/user/UserType'
import { getTagAnswerData } from '@utils/getTagAnswerData'
import { useNavigate } from 'react-router-dom'
import { useAnimation } from 'framer-motion'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { friendState } from '@libs/store/friend'
import { question } from '@utils/question'
import { TasteBoxVariantType } from '@utils/apis/favor/TasteType'
import { motion } from 'framer-motion'

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
  const controlsArray = Array.from(
    {
      length: 15,
    },
    () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useAnimation(),
  )
  const setFriendStateData = useSetRecoilState(friendState)
  const [clickedIndex, setClickedIndex] = useState(-1)
  const handleClick = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    idx: number,
  ) => {
    setClickedIndex(idx)
    if (Number(e.currentTarget.id) === idx) {
      await controlsArray[idx].start({
        scale: 0.95,
        transition: {
          ease: 'anticipate',
          delay: 0.02,
          duration: 0.1,
        },
      })
      await controlsArray[idx].start({
        scale: 1,
        transition: {
          type: 'spring',
          damping: 15,
          stiffness: 300,
          duration: 0.1,
          delay: 0.12,
        },
      })
    } else return
  }

  const handleClickPlusButton = (
    notAnsweredDetailCategories: TasteBoxVariantType[],
  ) => {
    navigate(`/profile/newTaste/${question[notAnsweredDetailCategories[0]]}`)
  }

  const handleClickPresentButton = (categoryValue: SubCategoryType) => {
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
          : ('' as SubCategoryName)
        const categoryValue = matchingProp?.value ?? ('' as SubCategoryType)
        const notAnsweredDetailCategories = tag[0]?.notAnsweredDetailCategories

        return (
          <motion.div
            key={idx}
            onClick={(e) => {
              handleClick(e, idx)
            }}
            animate={clickedIndex === idx ? controlsArray[idx] : {}}
            //animate={clickedIndex === idx ? controls : {}}
            id={String(idx)}
          >
            <Category
              categoryName={categoryName}
              isFriend={isFriend}
              allCategoryAnswered={notAnsweredDetailCategories.length === 0}
              onPlusButtonClick={() =>
                handleClickPlusButton(notAnsweredDetailCategories)
              }
              onPresentButtonClick={() =>
                handleClickPresentButton(categoryValue)
              }
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
          </motion.div>
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
