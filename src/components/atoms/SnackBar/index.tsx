import CompleteIcon from '@assets/icons/CompleteIcon'
import ErrorIcon from '@assets/icons/ErrorIcon'
import StingIcon from '@assets/icons/StingIcon'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { snackBarState } from '@libs/store/snackBar'
import { theme } from '@styles/theme'
import { useSetRecoilState } from 'recoil'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

export type SnackBarVariantType = 'complete' | 'error' | 'sting'

type SnackBarPropsType = {
  variant: SnackBarVariantType
  message: string
}

const SnackBar = () => {
  return (
    <StyledMessage
      position="bottom-center"
      autoClose={3000}
      closeButton={false}
      newestOnTop
      hideProgressBar
      limit={3}
      toastStyle={{
        borderRadius: '12px',
        backgroundColor: `${theme.palette.gray_600}`,
      }}
      bodyStyle={{
        color: `${theme.palette.gray_100}`,
      }}
    ></StyledMessage>
  )
}

export default SnackBar

const StyledMessage = styled(ToastContainer)`
  .Toastify__toast {
    ${theme.typo.Body_14}
    margin: 30px;
    display: flex
    flex-direction : row
    gap: 16px
    align-items : center;
    box-shadow:
      0px -2px 8px 0px rgba(0, 0, 0, 0.15),
      0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  }
`
