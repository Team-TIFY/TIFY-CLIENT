import { useEffect, useMemo, useRef, useState } from 'react'
import { SelectedProps, SelectedTag } from '@utils/apis/user/UserType'
import styled from '@emotion/styled'
import { PriceFilter } from '@assets/icons/PriceFilter'
import { ItemFilter } from '@assets/icons/ItemFilter'
import { Text } from '@components/atoms/Text'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import Dimmer from '@components/layouts/Dimmer'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import { GiftFilter } from '@components/atoms/GiftFilter'
import { theme } from '@styles/theme'

type DataType = {
  productId: number
  brand: string
  name: string
  price: number
  productOption: string
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
  const [selectedPage, setSelectedPage] = useState<number>(8)
  const [dataLoaded, setDataLoaded] = useState<boolean>(false)
  const outsideRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [products, setProducts] = useState<DataType[]>([])

  // 선택한 카테고리를 별도의 매개 변수로 생성
  const selectedCategories = selectedTags.map((tag) => tag.value)
  const selectedCategoriesString = selectedCategories
    .map((category) => `smallCategory=${category}`)
    .join('&')

  // 만약 selectedTags가 비어 있는 경우, 모든 태그를 선택한 것으로 가정
  const allCategoriesString = selectedProps
    .map((category) => `smallCategory=${category.value}`)
    .join('&')

  const { data: productsData = [] } = useQuery(['products', selectedTags], () =>
    FriendsApi.GET_PRESENT_RECOMMEND(
      selectedTags.length > 0 ? selectedCategoriesString : allCategoriesString,
      selectedPage,
    ),
  )

  //카테고리 제대로 출력되는지 확인
  console.log(
    selectedTags.length > 0 ? selectedCategoriesString : allCategoriesString,
  )

  useEffect(() => {
    if (productsData.statusCode === 200) {
      // 데이터를 products 변수에 저장
      setProducts(productsData.data.content)
      setDataLoaded(true)
    } else {
      setDataLoaded(false)
    }
  }, [productsData])

  console.log(products)

  const handleClickDimmer = useOutsideClick(outsideRef, () =>
    setIsMenuOpen(false),
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
          <RecommendFilter onClick={() => setIsMenuOpen(true)}>
            <ItemFilter />
            <Margin widthProps={2} />
            <Text typo="Caption_12R" children="추천순" color="gray_300" />
          </RecommendFilter>
          <Margin widthProps={12} />
          <RecommendFilter>
            <PriceFilter />
            <Margin widthProps={2} />
            <Text typo="Caption_12R" children="가격" color="gray_300" />
          </RecommendFilter>
        </FilterItemWrap>
        {dataLoaded && (
          <SortItemWrap>
            {products.map((product: DataType, index: number) => (
              <ItemDiv key={index}>
                <ItemImg />
                <Text
                  typo="Caption_12R"
                  color="gray_400"
                  children={product.brand}
                />
                <div
                  style={{
                    display: 'flex',
                    width: '149px',
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
        {isMenuOpen && (
          <>
            <Dimmer dimmerRef={outsideRef} onClick={handleClickDimmer} />
            {/* BottomSheet 추가 필요*/}
          </>
        )}
      </Container>
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

const ItemImg = styled.div`
  width: 100%;
  padding-bottom: 100%; //추후 크롤링 이미지 받으면 변경필요
  background-color: ${theme.palette.gray_300};
  border-radius: 8px;
  margin-bottom: 8px;
`
