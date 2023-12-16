import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { ChangeEvent } from 'react'
import { Text } from '@components/atoms/Text'
import isCheck from '@assets/icons/isCheck.svg'
import notCheck from '@assets/icons/notCheck.svg'

interface CheckboxProps {
  children: string
  name: string
  checked: boolean
  onChange: (target: ChangeEvent<HTMLInputElement>) => void
  border?: boolean
  padding?: number
}

export function Checkbox({
  children,
  name,
  checked,
  onChange,
  border = false,
  padding = 8,
}: CheckboxProps) {
  return (
    <Label border={border} padding={padding}>
      <CheckInput
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Text
        style={{ margin: '0px 12px' }}
        children={children}
        typo="Body_16"
        color="gray_200"
      />
    </Label>
  )
}

const Label = styled.label<{
  border: boolean
  padding: number
}>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${({ padding }) => `${padding}px`} 0px;
  margin-bottom: ${({ border }) => (border ? '8px' : '0px')};
  cursor: pointer;
`

const CheckInput = styled.input`
  width: 24px;
  height: 24px;
  appearance: none;
  background-image: url(${notCheck});

  &:checked {
    border-color: transparent;
    background-image: url(${isCheck});
  }
`
