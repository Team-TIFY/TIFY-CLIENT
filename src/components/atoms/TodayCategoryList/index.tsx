import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { profileState } from '@libs/store/profile'
import {
  TodayCategoryListPropsType,
  TodayCategoryValueType,
} from '@models/components/atoms/TodayCategory'
import { categoryList } from '@constants/atoms/todayCategory'
import { Text } from '../Text'

const TodayCategoryList = ({
  defaultCategory = 'FOOD',
}: TodayCategoryListPropsType) => {
  const [selectedCategory, setSelectedCategory] =
    useState<TodayCategoryValueType>(defaultCategory)
  const [profileStateData, setProfileStateData] = useRecoilState(profileState)

  const handleClickCategory = (value: TodayCategoryValueType) => {
    setProfileStateData((prevState) => ({
      ...prevState,
      pastTodayCategory: value,
    }))
    setSelectedCategory(value as TodayCategoryValueType)
  }

  useEffect(() => {
    setSelectedCategory(
      profileStateData.pastTodayCategory as TodayCategoryValueType,
    )
  }, [])

  return (
    <TodayCategoryListWrapper>
      {categoryList.map((category, index) => (
        <Text
          typo="Caption_12M"
          color={selectedCategory === category.value ? 'lemon_300' : 'white'}
          key={index}
          style={{
            cursor: 'pointer',
            minWidth: 'fit-content',
            padding: '6px 16px',
            borderBottom:
              selectedCategory === category.value
                ? `2px solid ${theme.palette.lemon_300}`
                : `none`,
          }}
          onClick={() =>
            handleClickCategory(category.value as TodayCategoryValueType)
          }
        >
          {category.name}
        </Text>
      ))}
    </TodayCategoryListWrapper>
  )
}

export default TodayCategoryList

const TodayCategoryListWrapper = styled.div`
  display: inline-flex;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`
