import { PurpleCheck } from '@assets/icons/PurpleCheck'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { FilterState, filterType } from '@libs/store/present'
import { theme } from '@styles/theme'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

function SortItem() {
  const [selected, setSelected] = useRecoilState(FilterState)
  const handleSortClick = (sortType: filterType) => {
    setSelected(sortType)
  }

  return (
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
  )
}

export default SortItem

const Container = styled.div`
  width: 100vw;
  max-width: 480px;
  background-color: ${theme.palette.gray_900};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding-bottom: 32px;
`
const BottomSticker = styled.div`
  position: fixed;
  /* width: 100%; */
  text-align: center;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`
const Wrap = styled.div`
  height: 48px;
  border-bottom: 1px solid ${theme.palette.gray_800};
  margin-top: 36px;
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
