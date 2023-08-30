import styled from "@emotion/styled";
import { KeyOfPalette, theme } from "@styles/theme";
import { Avatar, ProfileVariant } from "../Avatar";
import { Text } from "../Text";

type BubbleVariant =
| "new"
| "old"
| "older"

type ButtonColor = {
  [key in BubbleVariant]: {
    background: string,
    nickname: KeyOfPalette,
    reply: KeyOfPalette,
  }
}

const BUBBLE_COLOR_TYPE: ButtonColor = {
  new: {
    background: `${theme.palette.purple_500}`,
    nickname: "gray_100",
    reply: "white",
  },
  old: {
    background: `${theme.palette.gray_500}`,
    nickname: "gray_100",
    reply: "white",
  },
  older: {
    background: `${theme.palette.gray_800}`,
    nickname: "gray_200",
    reply: "gray_500",
  },
}

type BubbleProps = {
  variant: BubbleVariant;
  nickname: string;
  reply: string;
  imageUrl: ProfileVariant;
}

export const TextBubble = ({
  variant,
  nickname,
  reply,
  imageUrl
}: BubbleProps
) => {

  return (
    <Wrapper>
      <Bubble variant={variant}>
        <BubbleWrapper>
          <Avatar
            variant="xsmall"
            imageUrl={imageUrl}
            isVisible="visible"
          />     
          <InfWrapper>
            <Text
              children={nickname}
              typo={"Caption_10"}
              color={`${BUBBLE_COLOR_TYPE[variant].nickname}`}
              as={"div"}
            />
            <Text
              children={reply}
              typo={"Body_14"}
              color={`${BUBBLE_COLOR_TYPE[variant].reply}`}
            as={"div"}/>
          </InfWrapper>
        </BubbleWrapper>
      </Bubble>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const Bubble = styled.div<{
  variant: BubbleVariant,
}>`
  display: inline-block;
  background-color: ${({ variant }) => `${BUBBLE_COLOR_TYPE[variant].background}`};
  min-width: 124px;
  height: 48px;
  border:none;
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