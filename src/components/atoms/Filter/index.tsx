import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { PropsType } from '@models/components/atoms/Filter'
import { SelectedTagType } from '@models/favor'
import { FilterIcon } from '@assets/icons/FilterIcon'
import Svg from '../Svg'

export const Filter = ({
  selectedProps,
  setSelectedTags,
  selectedTags,
  ...props
}: PropsType) => {
  const [selected, setSelected] = useState(selectedProps)

  useEffect(() => {
    const updatedTags = selected
      .filter((item) => item.active)
      .reduce((acc, item) => {
        if (!acc.some((tag) => tag.value === item.value)) {
          acc.push({ name: item.name, value: item.value })
        }
        return acc
      }, [] as SelectedTagType[])

    setSelectedTags(updatedTags)
  }, [selected])

  const handleClick = (id: number) => {
    const updatedBtn = selected.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active }
      }

      return item
    })
    setSelected(updatedBtn)
  }

  const handleCancel = () => {
    //전체 취소 버튼
    const updatedBtn = selected.map((item) => ({
      ...item,
      active: false,
    }))
    setSelected(updatedBtn)
  }

  return (
    <Wrapper>
      <DivContainer>
        <>
          {selected.some((item) => item.active) && (
            <CancelBtn onClick={() => handleCancel()}>
              <Svg children={<FilterIcon />} />
            </CancelBtn>
          )}
        </>
        <FilterContainer>
          {selected.map((item) =>
            item.count ? (
              <SelectBtn
                key={item.id}
                active={item.active}
                onClick={() => handleClick(item.id)}
                {...props}
              >
                {item.name}
              </SelectBtn>
            ) : null,
          )}
        </FilterContainer>
      </DivContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DivContainer = styled.div`
  display: inline-flex;
`
const FilterContainer = styled.div``

const CancelBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.gray_800};
  cursor: pointer;
`

const SelectBtn = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? `${theme.palette.purple_300}` : `${theme.palette.gray_900}`};
  color: ${(props) =>
    props.active ? `${theme.palette.purple_800}` : `${theme.palette.gray_100}`};
  padding: 6px 18px;
  border-radius: 18px;
  ${theme.typo.Caption_12M};
  border: none;
  text-align: center;
  cursor: pointer;
  margin: 4px;
  min-width: 60px;
  height: 32px;
`
