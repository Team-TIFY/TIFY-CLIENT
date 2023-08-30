import styled from "@emotion/styled";
import { theme } from '@styles/theme';

type TagVariant = 'main' | 'dark';
type ColorVariant = 'purple' | 'pink' | 'teal' | 'aqua';

const TAG_BG_COLOR_TYPE = {
  main: {
    purple: `${theme.palette.purple_100}`,
    pink: `${theme.palette.pink_100}`,
    teal: `${theme.palette.teal_100}`,
    aqua: `${theme.palette.aqua_100}`,
  },
  dark: {
    purple: `${theme.palette.purple_500}`,
    pink: `${theme.palette.pink_500}`,
    teal: `${theme.palette.teal_500}`,
    aqua: `${theme.palette.aqua_500}`,
  }
}

const TAG_TEXT_COLOR_TYPE = {
  main: `${theme.palette.gray_800}`,
  dark: `${theme.palette.white}`,
}

const TAG_PADDING_TYPE = {
  main: '6px 8px',
  dark: '6px 10px',
}

interface TagProps {
  variant: TagVariant;
  color: ColorVariant;
  children: string;
  onClick?: () => void;
}

export const Tag = ({ variant, color, children }: TagProps) => {
  return (
    <Wrapper variant={variant} color={color}>
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
`;