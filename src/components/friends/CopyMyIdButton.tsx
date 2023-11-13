import { useRecoilValue, useSetRecoilState } from 'recoil'
import CopyToClipboard from 'react-copy-to-clipboard'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'
import CopyIcon from '@assets/icons/CopyIcon'
import { authState } from '@libs/store/auth'
import { snackBarState } from '@libs/store/snackBar'

const CopyMyIdButton = () => {
  const auth = useRecoilValue(authState)
  const setSnackBarStateData = useSetRecoilState(snackBarState)

  const handleClickCopyToClipboard = () => {
    setSnackBarStateData((prevState) => ({
      ...prevState,
      isSnackBarOn: true,
      message: '아이디를 복사했어요. 친구에게 전달해 주세요.',
    }))
  }

  return (
    <CopyToClipboard
      text={`${auth.userProfile.userId}`}
      onCopy={handleClickCopyToClipboard}
    >
      <SquareButton variant="mediumSquare" subVariant="default">
        <Svg
          children={<CopyIcon />}
          width={20}
          height={20}
          style={{ margin: '0 4px 0 0' }}
        />
        복사하기
      </SquareButton>
    </CopyToClipboard>
  )
}

export default CopyMyIdButton
