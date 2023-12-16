import styled from '@emotion/styled'
import { media, theme } from '@styles/theme'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export type SnackBarVariantType = 'complete' | 'error' | 'sting'

type SnackBarPropsType = {
  variant: SnackBarVariantType
  message: string
}

const SnackBar = () => {
  return (
    <StyledMessage
      position="bottom-center"
      autoClose={1500}
      closeButton={false}
      newestOnTop
      hideProgressBar
      limit={1}
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
    width: 312px;
    height: 65px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    box-shadow:
      0px -2px 8px 0px rgba(0, 0, 0, 0.15),
      0px 0px 2px 0px rgba(0, 0, 0, 0.3);
    ${media.mobile} {
      left: 8%;
    }
  }
`
