import CompleteIcon from '@assets/icons/CompleteIcon'
import ErrorIcon from '@assets/icons/ErrorIcon'
import StingIcon from '@assets/icons/StingIcon'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { snackBarState } from '@libs/store/snackBar'
import { theme } from '@styles/theme'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Text } from '../Text'

export type SnackBarVariantType = 'complete' | 'error' | 'sting'

type SnackBarPropsType = {
  variant: SnackBarVariantType
  message: string
}

const SnackBar = ({ variant, message }: SnackBarPropsType) => {
  const setSnackBarStateData = useSetRecoilState(snackBarState)

  const renderIcon = () => {
    if (variant === 'complete') {
      return <CompleteIcon />
    } else if (variant === 'error') {
      return <ErrorIcon />
    } else {
      return <StingIcon />
    }
  }

  const handleClickSnackBar = () =>
    setSnackBarStateData((prevState) => ({
      ...prevState,
      isSnackBarOn: false,
    }))

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSnackBarStateData((prevState) => ({
        ...prevState,
        isSnackBarOn: false,
      }))
    }, 3000)

    return () => clearTimeout(timeOut)
  })

  return (
    <StyledMessage onClick={handleClickSnackBar}>
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
  cursor: pointer;
  border-radius: 12px;
  padding: 12px 24px;
  justify-content: flex-start;
  gap: 16px;
  background-color: ${theme.palette.gray_600};
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
`
