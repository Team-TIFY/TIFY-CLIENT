import React from 'react'
import styled from '@emotion/styled'
import { HTMLAttributes } from 'react'

interface SvgProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onClick?: () => void
  width?: 'fit-content' | number
  height?: 'fit-content' | number
}

const Svg = ({
  children,
  onClick,
  width = 'fit-content',
  height = 'fit-content',
  ...props
}: SvgProps) => {
  return (
    <SvgWrapper onClick={onClick} width={width} height={height} {...props}>
      {children}
    </SvgWrapper>
  )
}

const SvgWrapper = styled.div<{
  width?: 'fit-content' | number
  height?: 'fit-content' | number
}>`
  display: inline-block;
  width: ${(props) =>
    props.width !== 'fit-content' ? `${props.width}px` : `fit-content`};
  height: ${(props) =>
    props.height !== 'fit-content' ? `${props.height}px` : `fit-content`};

  svg {
    width: 100%;
    height: 100%;
  }
`

export default Svg
