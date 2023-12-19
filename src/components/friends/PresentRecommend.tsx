import { useEffect, useState } from 'react'
import { SelectedProps, SelectedTag } from '@utils/apis/user/UserType'
import styled from '@emotion/styled'
import { ItemFilter } from '@assets/icons/ItemFilter'
import { Text } from '@components/atoms/Text'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import Dimmer from '@components/layouts/Dimmer'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
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
import cookingNull from '@assets/image/cookingNull.svg'
import exerciseNull from '@assets/image/exerciseNull.svg'
import BottomSheet from '@components/atoms/BottomSheet'

type DataType = {
  productId: number
  brand: string
  name: string
  price: number
  productOption: string
  imageUrl: string
  siteUrl: string
  smallCategory: string
}

function PresentRecommend() {
  const selectedProps: SelectedProps = [
    { id: 1, active: false, name: '메이크업', value: 'MAKEUP' },
    { id: 2, active: false, name: '프레그런스', value: 'FRAGRANCE' },
    { id: 3, active: false, name: '의류', value: 'CLOTHES' },
    { id: 4, active: false, name: '패션소품', value: 'FASHION_PRODUCT' },
    // { id: 5, active: false, name: '디지털 소품', value: 'DIGITAL_PRODUCT' },
    { id: 6, active: false, name: '가방', value: 'BAG' },
    { id: 7, active: false, name: '액세사리', value: 'ACCESSORY' },
    { id: 8, active: false, name: '요리', value: 'COOKING' },
    { id: 9, active: false, name: '운동', value: 'EXERCISE' },
  ]

  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false)
  const [products, setProducts] = useState<DataType[]>([])
  const [isSortOpen, setIsSortOpen] = useRecoilState<string>(isFilterTypeState)
  const selectedFilter = useRecoilValue(FilterState)
  const selectedPrice = useRecoilValue(PriceState)

  const selectedCategories = selectedTags.map((tag) => tag.value)
  const selectedCategoriesString = selectedCategories
    .map((category) => `${category}`)
    .join(',')

  // 만약 selectedTags가 비어 있는 경우, 모든 태그를 선택한 것으로 가정
  const allCategoriesString = selectedProps
    .map((category) => `${category.value}`)
    .join(',')

  const [outsideRef, handleClickDimmer] = useOutsideClick(() =>
    setIsSortOpen(''),
  )

  const gotoSite = (siteUrl: string) => {
    window.open(`${siteUrl}`)
  }

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const defaultImage = (smallCategory: string) => {
    switch (smallCategory) {
      case 'MAKEUP':
        return makeupNull
      case 'FRAGRANCE':
        return fragranceNull
      case 'CLOTHES':
        return clothesNull
      case 'FASHION_PRODUCT':
        return fashionNull
      case 'BAG':
        return bagNull
      case 'ACCESSORY':
        return accessoryNull
      case 'COOKING':
        return cookingNull
      case 'EXERCISE':
        return exerciseNull
      default:
        return makeupNull
    }
  }

  useEffect(() => {
    FriendsApi.GET_PRESENT_RECOMMEND(
      selectedTags.length > 0 ? selectedCategoriesString : allCategoriesString,
      selectedFilter.filterValue,
      selectedPrice.priceValue,
    ).then((response) => {
      if (response.statusCode === 200) {
        setProducts(response.data)
        setDataLoaded(true)
      } else {
        setDataLoaded(false)
      }
    })
  }, [selectedTags, selectedFilter.filter, selectedPrice.price])

  const handleFilterClick = () => {
    setIsSortOpen('filter')
  }

  const handlePriceClick = () => {
    setIsSortOpen('price')
  }

  const handleBottomSheetClick = () => {
    setIsSortOpen('')
  }

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
      <Container>
        {dataLoaded && (
          <SortItemWrap>
            {products.map((product: DataType, index: number) => (
              <ItemDiv key={index} onClick={() => gotoSite(product.siteUrl)}>
                <ItemImg
                  imageUrl={
                    product.imageUrl || defaultImage(product.smallCategory)
                  }
                />
                <Text
                  typo="Caption_12R"
                  color="gray_400"
                  children={product.brand}
                />
                <div
                  style={{
                    display: 'flex',
                    marginBottom: '4px',
                  }}
                >
                  <Text
                    typo="Caption_12R"
                    color="gray_100"
                    children={
                      product.productOption
                        ? `${product.productOption}` + ' - ' + `${product.name}`
                        : `${product.name}`
                    }
                  />
                </div>
                <Text
                  typo="Mont_Caption_12B"
                  color="gray_100"
                  children={formatPrice(product.price)}
                />
              </ItemDiv>
            ))}
          </SortItemWrap>
        )}
      </Container>
      {isSortOpen === 'filter' && (
        <>
          <BottomSheet isexpanded={true} isFilter={true} filterType="filter">
            <SortItem />
          </BottomSheet>
        </>
      )}
      {isSortOpen === 'price' && (
        <BottomSheet isexpanded={true} isFilter={true} filterType="price">
          <PriceFilter />
        </BottomSheet>
      )}
    </>
  )
}

export default PresentRecommend

const FilterWrapper = styled.div`
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
const SortItemWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  row-gap: 52px;
  column-gap: 12px;
  justify-items: center;
`
const ItemDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ItemImg = styled.div<{ imageUrl: string }>`
  width: 100%;
  padding-bottom: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`
