import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { OptionVariantType, OptionPropsType } from '@models/Option'
import { OPTION_CHILDREN, OPTION_TEXT_COLOR } from '@constants/atoms/option'
import { Text } from '../Text'
import { FlexBox } from '@components/layouts/FlexBox'

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
