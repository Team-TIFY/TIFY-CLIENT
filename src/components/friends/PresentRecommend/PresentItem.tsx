import { DataType } from './PresentRecommend'
import styled from '@emotion/styled'
import { Text } from '@components/atoms/Text'
import makeupNull from '@assets/image/makeupNull.svg'
import fragranceNull from '@assets/image/fragranceNull.svg'
import clothesNull from '@assets/image/clothesNull.svg'
import fashionNull from '@assets/image/fashionNull.svg'
import bagNull from '@assets/image/bagNull.svg'
import accessoryNull from '@assets/image/accessoryNull.svg'
import digitalNull from '@assets/image/digitalNull.svg'
import cookingNull from '@assets/image/cookingNull.svg'
import exerciseNull from '@assets/image/exerciseNull.svg'

const PresentItem = (data: DataType) => {
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
      case 'DIGITAL_PRODUCT':
        return digitalNull
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

  return (
    <>
      <ItemDiv key={data.productId} onClick={() => gotoSite(data.siteUrl)}>
        <ItemImg imageUrl={data.imageUrl || defaultImage(data.smallCategory)} />
        <Text typo="Caption_12R" color="gray_400" children={data.brand} />
        <div style={{ display: 'flex', marginBottom: '4px' }}>
          <Text
            typo="Caption_12R"
            color="gray_100"
            children={
              data.productOption
                ? `${data.productOption}` + ' - ' + `${data.name}`
                : `${data.name}`
            }
          />
        </div>
        <Text
          typo="Mont_Caption_12B"
          color="gray_100"
          children={formatPrice(data.price)}
        />
      </ItemDiv>
    </>
  )
}

export default PresentItem

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
