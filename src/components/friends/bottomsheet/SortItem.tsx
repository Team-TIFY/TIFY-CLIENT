import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { FilterState } from '@libs/store/present'
import { FilterType } from '@models/stores/present'
import { PurpleCheck } from '@assets/icons/PurpleCheck'
import BottomSheetBar from '@components/atoms/BottomSheet/BottomSheetBar'
import { Text } from '@components/atoms/Text'

function SortItem() {
  const [selected, setSelected] = useRecoilState(FilterState)
  const handleSortClick = (sortType: FilterType) => {
    setSelected(sortType)
  }

  return (
    <>
      <BottomSheetBar />
      <BottomSticker>
        <Container>
          <Wrap>
            <Text typo="Subhead_16" children="정렬 기준" color="gray_100" />
          </Wrap>
          <Sort
            onClick={() =>
              handleSortClick({
                filter: '추천순',
                filterValue: 'DEFAULT',
              })
            }
            isselected={selected.filter === '추천순'}
          >
            추천순
            {selected.filter === '추천순' && (
              <>
                <PurpleCheck />
              </>
            )}
          </Sort>
          <Sort
            onClick={() =>
              handleSortClick({
                filter: '가격낮은순',
                filterValue: 'PRICE_ASC',
              })
            }
            isselected={selected.filter === '가격낮은순'}
          >
            가격낮은순
            {selected.filter === '가격낮은순' && (
              <>
                <PurpleCheck />
              </>
            )}
          </Sort>
          <Sort
            onClick={() =>
              handleSortClick({
                filter: '가격높은순',
                filterValue: 'PRICE_DESC',
              })
            }
            isselected={selected.filter === '가격높은순'}
          >
            가격높은순
            {selected.filter === '가격높은순' && (
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

export default SortItem

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
  z-index: 999;
`
const Wrap = styled.div`
  height: 48px;
  border-bottom: 1px solid ${theme.palette.gray_800};
  margin-top: 16px;
  padding-top: 8px;
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
