import styled from '@emotion/styled'

import {
  BubblePropsType,
  BubbleVariantType,
} from '@models/components/atoms/TextBubble'
import { BUBBLE_COLOR_TYPE } from '@constants/atoms/textBubble'
import { Avatar } from '../Avatar'
import { Text } from '../Text'

export const TextBubble = ({ variant, nickname, reply }: BubblePropsType) => {
  return (
    <Wrapper>
      <Bubble variant={variant}>
        <BubbleWrapper>
          <Avatar variant="xsmall" isVisible="visible" />
          <InfWrapper>
            <Text
              children={nickname}
              typo="Caption_10"
              color={`${BUBBLE_COLOR_TYPE[variant].nickname}`}
              as="div"
            />
            <Text
              children={reply}
              typo="Body_14"
              color={`${BUBBLE_COLOR_TYPE[variant].reply}`}
              as="div"
            />
          </InfWrapper>
        </BubbleWrapper>
      </Bubble>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Bubble = styled.div<{
  variant: BubbleVariantType
}>`
  display: inline-block;
  background-color: ${({ variant }) =>
    `${BUBBLE_COLOR_TYPE[variant].background}`};
  cursor: ${({ variant }) => (variant === 'old' ? 'pointer' : 'cursor')};
  min-width: 124px;
  max-width: 276px;
  min-height: 48px;
  border: none;
  border-radius: 24px;
`

const BubbleWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 6px 20px 6px 8px;
`

const InfWrapper = styled.div`
  padding-left: 8px;
`
