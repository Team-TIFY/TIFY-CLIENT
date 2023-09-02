import TagIcon from "@assets/icons/TagIcon";
import styled from "@emotion/styled";
import { theme } from '@styles/theme';

type TagVariant = 'main' | 'dark';
type ColorVariant = 'purple' | 'pink' | 'aqua';

const TAG_BG_COLOR_TYPE = {
  main: {
    purple: `${theme.palette.purple_100}`,
    pink: `${theme.palette.pink_100}`,
    aqua: `${theme.palette.aqua_100}`,
  },
  dark: {
    purple: `${theme.palette.purple_500}`,
    pink: `${theme.palette.pink_300}`,
    aqua: `${theme.palette.aqua_500}`,
  }
}

const TAG_IMG_TYPE: Record<ColorVariant, "purple_500" | "pink_500" | "aqua_300"> = {
  purple: "purple_500",
  pink: "pink_500",
  aqua: "aqua_300",
}

const TAG_TEXT_COLOR_TYPE = {
  main: `${theme.palette.gray_800}`,
  dark: `${theme.palette.white}`,
}

const TAG_PADDING_TYPE = {
  main: '6px 8px',
  dark: '6px 10px',
}

const TAG_COLOR_TYPE: Record<0 | 1 | 2 | 3 | 4 | 5, { variant: TagVariant, color: ColorVariant }> = {
  0: {
    variant: "main",
    color: "purple"
  },
  1: {
    variant: "main",
    color: "pink"
  },
  2: {
    variant: "dark",
    color: "aqua"
  },
  3: {
    variant: "dark",
    color: "pink"
  },
  4: {
    variant: "main",
    color: "aqua"
  },
  5: {
    variant: "dark",
    color: "purple"
  },
}

interface TagProps {
  index: 0 | 1 | 2 | 3 | 4 | 5 
  children: string;
  onClick?: () => void;
}

export const Tag = ({ index, children }: TagProps) => {
  return (
    <Wrapper variant={TAG_COLOR_TYPE[index].variant} color={TAG_COLOR_TYPE[index].color}>
      {TAG_COLOR_TYPE[index].variant === "main" && <TagIcon stroke={`${TAG_IMG_TYPE[TAG_COLOR_TYPE[index].color]}`} />}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ variant: TagVariant, color: ColorVariant }>`
  ${theme.typo.Caption_12M};
  background-color: ${({ variant, color }) => `${TAG_BG_COLOR_TYPE[variant][color]}`};
  color: ${({ variant }) => `${TAG_TEXT_COLOR_TYPE[variant]}`};
  padding: ${({ variant}) => `${TAG_PADDING_TYPE[variant]}`};
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;