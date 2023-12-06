import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SnackBar from '@components/atoms/SnackBar'
import StingIcon from '@assets/icons/StingIcon'
import CompleteIcon from '@assets/icons/CompleteIcon'
import ErrorIcon from '@assets/icons/ErrorIcon'
type ToastType = 'success' | 'default' | 'error'

const useSnackBar = () => {
  const setSnackBar = ({
    type = 'error',
    comment,
    ...props
  }: {
    type?: ToastType
    comment: string
  }) => {
    if (type === 'success') {
      toast.success(comment, { type: type, ...props, icon: <CompleteIcon /> })
    } else if (type === 'error') {
      toast.error(comment, { type: type, ...props, icon: <ErrorIcon /> })
    } else {
      toast.info(comment, { type: type, ...props, icon: <StingIcon /> })
    }
  }

  return { SnackBar, setSnackBar }
}

export default useSnackBar