import styled from '@emotion/styled';
import { ButtonHTMLAttributes, useState } from 'react';
import { theme } from '@styles/theme';
import { FilterIcon } from './../../../assets/image/FilterIcon';

interface FilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
type Props = Partial<FilterProps>;

export const Filter = ({
  ...props
} : Props) => {

  const [selected, setSelected] = useState([
    { id: 1, active: false, value: '메이크업' },
    { id: 2, active: false, value: '프레그런스' },
    { id: 3, active: false, value: '의류' },
    { id: 4, active: false, value: '잡화' },
    { id: 5, active: false, value: '액세사리' },
    { id: 6, active: false, value: '요리' },
    { id: 7, active: false, value: '운동'},
    { id: 8, active: false, value: '여행' },
    { id: 9, active: false, value: '문화생활' },
  ]);

  const handleClick = (id: number) => {
    const updatedBtn = selected.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setSelected(updatedBtn);
    console.log(selected);
  };
  
  const handleCancel = () => {
    const updatedButtons = selected.map((item) => ({
      ...item,
      active: false,
    }));
    setSelected(updatedButtons);
    console.log(selected);
  }

  return (
    <Wrapper>
      <>
        {selected.some((item) => item.active) && (
          <CancelBtn onClick={() => handleCancel()}>
            <FilterIcon />
          </CancelBtn>
        )}
      </>
      <FilterContainer>
        {selected.map((item) => (
          <SelectBtn
            key={item.id}
            active={item.active}
            onClick={() => handleClick(item.id)}
            {...props}
          >
            {item.value}
          </SelectBtn>
        ))}
      </FilterContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FilterContainer = styled.div``


const CancelBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius:50%;
  border: none;
  margin: 4px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color:${theme.palette.gray_800};
  cursor: pointer;
`


const SelectBtn = styled.button<{ active:boolean }>`
  background-color: ${(props) => props.active ? `${theme.palette.purple_300}` : `${theme.palette.gray_900}`};
  color: ${(props) => props.active ? `${theme.palette.purple_800}` : `${theme.palette.gray_100}`};
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
