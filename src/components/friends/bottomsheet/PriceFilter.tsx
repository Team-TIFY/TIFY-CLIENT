import { PurpleCheck } from '@assets/icons/PurpleCheck'
import BottomSheetBar from '@components/atoms/BottomSheet/BottomSheetBar'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { PriceState, priceType } from '@libs/store/present'
import { theme } from '@styles/theme'
import { useRecoilState } from 'recoil'

function PriceFilter() {
  const [selected, setSelected] = useRecoilState(PriceState)
  const handleSortClick = (sortType: priceType) => {
    setSelected(sortType)
  }

  return (
    <>
      <BottomSheetBar />
      <BottomSticker>
        <Container>
          <Wrap>
            <Text typo="Subhead_16" children="필터" color="gray_100" />
          </Wrap>
          <Sort
            onClick={() =>
              handleSortClick({
                price: '가격',
                priceValue: 'DEFAULT',
              })
            }
            isselected={selected.price === '가격'}
          >
            전체
            {selected.price === '가격' && (
              <>
                <PurpleCheck />
              </>
            )}
          </Sort>
          <Sort
            onClick={() =>
              handleSortClick({
                price: '1만원 미만',
                priceValue: 'LESS_THAN_10000',
              })
            }
            isselected={selected.price === '1만원 미만'}
          >
            1만원 미만
            {selected.price === '1만원 미만' && (
              <>
                <PurpleCheck />
              </>
            )}
          </Sort>
          <Sort
            onClick={() =>
              handleSortClick({
                price: '1-2만원대',
                priceValue: 'MORE_THAN_10000_LESS_THAN_30000',
              })
            }
            isselected={selected.price === '1-2만원대'}
          >
            1-2만원대
            {selected.price === '1-2만원대' && (
              <>
                <PurpleCheck />
              </>
            )}
          </Sort>
          <Sort
            onClick={() =>
              handleSortClick({
                price: '3-4만원대',
                priceValue: 'MORE_THAN_30000_LESS_THAN_50000',
              })
            }
            isselected={selected.price === '3-4만원대'}
          >
            3-4만원대
            {selected.price === '3-4만원대' && (
              <>
                <PurpleCheck />
              </>
            )}
          </Sort>
          <Sort
            onClick={() =>
              handleSortClick({
                price: '5만원 이상',
                priceValue: 'MORE_THAN_50000',
              })
            }
            isselected={selected.price === '5만원 이상'}
          >
            5만원 이상
            {selected.price === '5만원 이상' && (
              <>
                <PurpleCheck />
              </>
            )}
          </Sort>
        </Container>
      </BottomSticker>
    </>
  )
}

export default PriceFilter

const Container = styled.div`
  width: 100vw;
  max-width: 480px;
`
const BottomSticker = styled.div`
  position: fixed;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Wrap = styled.div`
  height: 48px;
  margin-top: 16px;
  padding-top: 8px;
  border-bottom: 1px solid ${theme.palette.gray_800};
`
const Sort = styled.div<{ isselected: boolean }>`
  height: 52px;
  padding: 0 24px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ isselected }) =>
    isselected ? `${theme.palette.purple_300}` : `${theme.palette.white}`};
  ${(props) => (props.isselected ? theme.typo.Subhead_14 : theme.typo.Body_14)}
`
