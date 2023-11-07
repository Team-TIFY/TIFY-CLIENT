import CompleteIcon from '@assets/icons/CompleteIcon'
import ErrorIcon from '@assets/icons/ErrorIcon'
import StingIcon from '@assets/icons/StingIcon'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { Text } from '../Text'

type SnackBarVariantType = 'complete' | 'error' | 'sting'

type SnackBarPropsType = {
  variant: SnackBarVariantType
  message: string
}

const SnackBar = ({ variant, message }: SnackBarPropsType) => {
  const renderIcon = () => {
    if (variant === 'complete') {
      return <CompleteIcon />
    } else if (variant === 'error') {
      return <ErrorIcon />
    } else {
      return <StingIcon />
    }
  }
  return (
    <StyledMessage>
      {renderIcon()}
      <Text
        typo="Body_14"
        color="gray_100"
        style={{
          maxWidth: '226px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {message}
      </Text>
    </StyledMessage>
  )
}

export default SnackBar

const StyledMessage = styled(FlexBox)`
  width: 312px;
  height: 65px;
  border-radius: 12px;
  padding: 12px 24px;
  justify-content: flex-start;
  gap: 16px;
  background-color: ${theme.palette.gray_600};
`
