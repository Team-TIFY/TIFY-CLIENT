import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { TextType, theme } from '@styles/theme'
import { Text } from '../Text'

type VariantType = 'new' | 'account'

export type OptionPropsType = {
  variant: VariantType
}

const OPTION_CHILDREN: Record<VariantType, string> = {
  new: `new`,
  account: `계정`,
}

const OPTION_TEXT_COLOR: Record<VariantType, TextType['color']> = {
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

const OptionWrapper = styled(FlexBox)<{ variant: VariantType }>`
  width: 32px;
  height: 18px;
  padding: 1px 6px;
  border-radius: 13px;
  background-color: ${({ variant }) =>
    variant === 'new'
      ? `${theme.palette.lemon_300}`
      : `${theme.palette.gray_700}`};
`
