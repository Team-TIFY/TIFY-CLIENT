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
import { useRecoilValue } from 'recoil'
import { FilterState, PriceState } from '@libs/store/present'
import PriceFilter from './bottomsheet/PriceFilter'
import { PriceFilterIcon } from '@assets/icons/PriceFilterIcon'

type DataType = {
  productId: number
  brand: string
  name: string
  price: number
  productOption: string
  imageUrl: string
}

function PresentRecommend() {
  const selectedProps: SelectedProps = [
    { id: 1, active: false, name: '메이크업', value: 'MAKEUP' },
    { id: 2, active: false, name: '프레그런스', value: 'FRAGRANCE' },
    { id: 3, active: false, name: '의류', value: 'CLOTHES' },
    { id: 4, active: false, name: '패션소품', value: 'FASHION_PRODUCT' },
    { id: 5, active: false, name: '액세사리', value: 'ACCESSORY' },
    { id: 6, active: false, name: '요리', value: 'COOKING' },
    { id: 7, active: false, name: '운동', value: 'EXERCISE' },
    { id: 8, active: false, name: '여행', value: 'TRAVEL' },
    { id: 9, active: false, name: '문화생활', value: 'CULTURE_LIFE' },
  ]
  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false)
  const [isSortOpen, setIsSortOpen] = useState<string>('')
  const [products, setProducts] = useState<DataType[]>([])
  const selectedFilter = useRecoilValue(FilterState)
  const selectedPrice = useRecoilValue(PriceState)

  // 선택한 카테고리를 별도의 매개 변수로 생성
  const selectedCategories = selectedTags.map((tag) => tag.value)
  const selectedCategoriesString = selectedCategories
    .map((category) => `${category}`)
    .join(',')

  // 만약 selectedTags가 비어 있는 경우, 모든 태그를 선택한 것으로 가정
  const allCategoriesString = selectedProps
    .map((category) => `${category.value}`)
    .join(',')

  useEffect(() => {
    FriendsApi.GET_PRESENT_RECOMMEND(
      selectedTags.length > 0 ? selectedCategoriesString : allCategoriesString,
      selectedFilter.filterValue,
      selectedPrice.priceValue,
    ).then((response) => {
      if (response.statusCode === 200) {
        setProducts(response.data.content)
        setDataLoaded(true)
      } else {
        setDataLoaded(false)
      }
    })
  }, [selectedTags, selectedFilter.filter, selectedPrice.price])

  const [outsideRef, handleClickDimmer] = useOutsideClick(() =>
    setIsSortOpen(''),
  )

  return (
    <>
      <FilterWrapper>
        <GiftFilter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          selectedProps={selectedProps}
        />
      </FilterWrapper>
      <Container>
        <FilterItemWrap>
          <RecommendFilter onClick={() => setIsSortOpen('filter')}>
            <ItemFilter />
            <Margin widthProps={2} />
            <Text
              typo="Caption_12R"
              children={selectedFilter.filter}
              color="gray_300"
            />
          </RecommendFilter>
          <Margin widthProps={12} />
          <RecommendFilter onClick={() => setIsSortOpen('price')}>
            <PriceFilterIcon />
            <Margin widthProps={2} />
            <Text
              typo="Caption_12R"
              children={selectedPrice.price}
              color="gray_300"
            />
          </RecommendFilter>
        </FilterItemWrap>
        {dataLoaded && (
          <SortItemWrap>
            {products.map((product: DataType, index: number) => (
              <ItemDiv key={index}>
                <ItemImg imageUrl={product.imageUrl} />
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
                  children={product.price}
                />
              </ItemDiv>
            ))}
          </SortItemWrap>
        )}
      </Container>
      {isSortOpen === 'filter' && (
        <>
          <Dimmer dimmerRef={outsideRef} onClick={handleClickDimmer} />
          <SortItem />
        </>
      )}
      {isSortOpen === 'price' && (
        <>
          <Dimmer dimmerRef={outsideRef} onClick={handleClickDimmer} />
          <PriceFilter />
        </>
      )}
    </>
  )
}

export default PresentRecommend

const FilterWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  margin: 24px 0 16px 0;
  padding: 0 16px 0 16px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Container = styled.div`
  padding: 0 24px 0 24px;
`

const FilterItemWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
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
  padding-bottom: 100%; //추후 크롤링 이미지 받으면 변경필요
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`
