import { useRecoilValue } from 'recoil'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'
import CopyIcon from '@assets/icons/CopyIcon'
import { authState } from '@libs/store/auth'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyMyIdButton = () => {
  const auth = useRecoilValue(authState)

  return (
    <CopyToClipboard
      text={`${auth.userProfile.userId}`}
      onCopy={() => console.log('복사 완료')}
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
