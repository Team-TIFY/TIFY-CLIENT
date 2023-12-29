import styled from '@emotion/styled'

import { TextType, theme } from '@styles/theme'
import {
  OptionVariantType,
  OptionPropsType,
  OptionTextType,
} from '@models/Option'
import { Text } from '../Text'
import { FlexBox } from '@components/layouts/FlexBox'

const OPTION_CHILDREN: Record<OptionVariantType, OptionTextType> = {
  new: `new`,
  account: `계정`,
}

const OPTION_TEXT_COLOR: Record<OptionVariantType, TextType['color']> = {
  new: 'gray_800',
  account: 'gray_200',
}

const Option = ({ variant }: OptionPropsType) => {
  return (
    <OptionWrapper variant={variant}>
      <Text
        typo="Caption_10"
        children={OPTION_CHILDREN[variant]}
        color={OPTION_TEXT_COLOR[variant]}
      />
    </OptionWrapper>
  )
}

export default Option

const OptionWrapper = styled(FlexBox)<{ variant: OptionVariantType }>`
  width: 32px;
  height: 18px;
  padding: 1px 6px;
  border-radius: 13px;
  background-color: ${({ variant }) =>
    variant === 'new'
      ? `${theme.palette.lemon_300}`
      : `${theme.palette.gray_700}`};
`
