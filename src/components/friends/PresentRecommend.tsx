import { useEffect, useState } from 'react'
import {
  SelectedProps,
  SelectedTag,
  SubCategoryName,
} from '@utils/apis/user/UserType'
import styled from '@emotion/styled'
import { ItemFilter } from '@assets/icons/ItemFilter'
import { Text } from '@components/atoms/Text'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { GiftFilter } from '@components/atoms/GiftFilter'
import SortItem from './bottomsheet/SortItem'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FilterState, isFilterTypeState, PriceState } from '@libs/store/present'
import PriceFilter from './bottomsheet/PriceFilter'
import { PriceFilterIcon } from '@assets/icons/PriceFilterIcon'
import { theme } from '@styles/theme'
import makeupNull from '@assets/image/makeupNull.svg'
import fragranceNull from '@assets/image/fragranceNull.svg'
import clothesNull from '@assets/image/clothesNull.svg'
import fashionNull from '@assets/image/fashionNull.svg'
import bagNull from '@assets/image/bagNull.svg'
import accessoryNull from '@assets/image/accessoryNull.svg'
import digitalNull from '@assets/image/digitalNull.svg'
import cookingNull from '@assets/image/cookingNull.svg'
import exerciseNull from '@assets/image/exerciseNull.svg'
import BottomSheet from '@components/atoms/BottomSheet'
import useBottomSheet from '@libs/hooks/useBottomSheet'
import { friendState } from '@libs/store/friend'
import { CategoryNameType } from '@components/atoms/Category'
import { useInfiniteQueries } from '@libs/hooks'
import PresentItem from './PresentItem'

export type DataType = {
  productId: number
  name: string
  brand: string
  characteristic: string
  price: number
  productOption: string
  imageUrl: string
  siteUrl: string
  largeCategory: string
  smallCategory: string
  detailCategory: string
  categoryName: string
}

const selectedPropsData: SelectedProps = [
  { id: 1, active: false, name: '메이크업', value: 'MAKEUP' },
  { id: 2, active: false, name: '프레그런스', value: 'FRAGRANCE' },
  { id: 3, active: false, name: '의류', value: 'CLOTHES' },
  { id: 4, active: false, name: '패션소품', value: 'FASHION_PRODUCT' },
  { id: 5, active: false, name: '디지털소품', value: 'DIGITAL_PRODUCT' },
  { id: 6, active: false, name: '가방', value: 'BAG' },
  { id: 7, active: false, name: '액세사리', value: 'ACCESSORY' },
  { id: 8, active: false, name: '요리', value: 'COOKING' },
  { id: 9, active: false, name: '운동', value: 'EXERCISE' },
]

function PresentRecommend() {
  const [selectedProps, setSelectedProps] =
    useState<SelectedProps>(selectedPropsData)
  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([])
  const [isSortOpen, setIsSortOpen] = useRecoilState<string>(isFilterTypeState)
  const selectedFilter = useRecoilValue(FilterState)
  const selectedPrice = useRecoilValue(PriceState)
  const friendStateData = useRecoilValue(friendState)

  const selectedCategories = selectedTags.map((tag) => tag.value)
  const selectedCategoriesString = selectedCategories
    .map((category) => `${category}`)
    .join(',')

  // 만약 selectedTags가 비어 있는 경우, 모든 태그를 선택한 것으로 가정
  const allCategoriesString = selectedProps
    .map((category) => `${category.value}`)
    .join(',')

  console.log(selectedProps)
  console.log('tags:', selectedTags)

  const { infiniteListElement, isEmpty } = useInfiniteQueries<DataType>(
    [
      'GET_PRESENT_RECOMMEND',
      selectedTags,
      selectedFilter.filter,
      selectedPrice.price,
      friendStateData.presentRecommendFilterValue,
    ],
    () =>
      FriendsApi.GET_PRESENT_RECOMMEND({
        smallCategory:
          selectedTags.length > 0
            ? selectedCategoriesString
            : allCategoriesString,
        priceOrder: selectedFilter.filterValue,
        priceFilter: selectedPrice.priceValue,
      }),
    PresentItem,
  )

  useEffect(() => {
    const selectedOption = selectedProps.find(
      (selectedProp) =>
        selectedProp.value === friendStateData.presentRecommendFilterValue,
    )

    if (selectedOption) {
      setSelectedProps((prevSelectedProps) =>
        prevSelectedProps.map((prop) =>
          prop.value === selectedOption.value
            ? { ...prop, active: true }
            : prop,
        ),
      )

      setSelectedTags([
        {
          name: selectedOption.name as SubCategoryName,
          value: selectedOption.value as CategoryNameType,
        },
      ])
    } else {
      // 만약 selectedOption이 없다면, 즉 선택된 카테고리가 없다면
      setSelectedProps((prevSelectedProps) =>
        prevSelectedProps.map((prop) => ({ ...prop, active: false })),
      )

      setSelectedTags([])
    }
  }, [friendStateData.presentRecommendFilterValue])

  const handleFilterClick = () => {
    setIsSortOpen('filter')
    openBottomSheet()
  }

  const handlePriceClick = () => {
    setIsSortOpen('price')
    openBottomSheet()
  }

  const {
    bottomSheetRef,
    isBottomSheetOpen,
    openBottomSheet,
    closeBottomSheet,
  } = useBottomSheet({
    initialState: false,
  })

  return (
    <>
      <FilterWrapper>
        <GiftFilter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          selectedProps={selectedProps}
        />
      </FilterWrapper>
      <ContainerFix>
        <FilterItemWrap>
          <RecommendFilter onClick={handleFilterClick}>
            <ItemFilter />
            <Margin widthProps={2} />
            <Text
              typo="Caption_12R"
              children={selectedFilter.filter}
              color="gray_300"
            />
          </RecommendFilter>
          <Margin widthProps={12} />
          <RecommendFilter onClick={handlePriceClick}>
            <PriceFilterIcon />
            <Margin widthProps={2} />
            <Text
              typo="Caption_12R"
              children={selectedPrice.price}
              color="gray_300"
            />
          </RecommendFilter>
        </FilterItemWrap>
      </ContainerFix>
      <Container>{!isEmpty && infiniteListElement}</Container>
      <>
        <BottomSheet
          isexpanded={isBottomSheetOpen}
          filterType={isSortOpen}
          bottomSheetRef={bottomSheetRef}
        >
          {isSortOpen === 'filter' && <SortItem />}
          {isSortOpen === 'price' && <PriceFilter />}
        </BottomSheet>
      </>
      <BottomSpacing />
    </>
  )
}

export default PresentRecommend

const FilterWrapper = styled.div`
  z-index: 1;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  position: sticky;
  display: flex;
  top: 80px;
  margin: 0px 0 0px 0;
  padding: 24px 16px 16px 16px;
  background-color: ${theme.palette.background};
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Container = styled.div`
  padding: 0px 24px 0 24px;
`

const ContainerFix = styled.div`
  padding: 0px 24px 0 24px;
  position: sticky;
  z-index: 1;
  top: 160px;
  width: 100%;
`

const FilterItemWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  background-color: ${theme.palette.background};
`
const RecommendFilter = styled.div`
  display: flex;
  align-items: center;
`

const Margin = styled.div<{
  widthProps: number
}>`
  width: ${({ widthProps }) => `${widthProps}px`};
  height: 100%;
`
const BottomSpacing = styled.div`
  width: 100%;
  height: 56px;
`
