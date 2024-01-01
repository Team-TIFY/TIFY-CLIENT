import { useRecoilValue } from 'recoil'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { authState } from '@libs/store/auth'
import useSnackBar from '@libs/hooks/useSnackBar'
import CopyIcon from '@assets/icons/CopyIcon'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'

const CopyMyIdButton = () => {
  const auth = useRecoilValue(authState)

  const { setSnackBar } = useSnackBar()

  const handleClickCopyToClipboard = () => {
    setSnackBar({
      comment: '아이디를 복사했어요.\n 친구에게 전달해 주세요.',
      type: 'success',
    })
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
