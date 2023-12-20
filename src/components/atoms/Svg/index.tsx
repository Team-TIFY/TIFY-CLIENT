import React from 'react'
import styled from '@emotion/styled'
import { HTMLAttributes } from 'react'
import { FlexBox } from '@components/layouts/FlexBox'

/**
 * @param children 보여줄 SVG 이미지 컴포넌트를 나타냄
 * @param onClick SVG 클릭 시 발생할 이벤트를 넘겨주는 함수임
 * @param width 가로 너비를 나타냄
 * @param height 높이를 나타냄
 */
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
      <FlexBox>{children}</FlexBox>
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
    cursor: pointer;
  }
`

export default Svg
