import CopyToClipboard from 'react-copy-to-clipboard'
import styled from '@emotion/styled'

import useSnackBar from '@libs/hooks/useSnackBar'
import LinkIcon from '@assets/icons/LinkIcon'
import SaveIcon from '@assets/icons/SaveIcon'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'
import { FlexBox } from '@components/layouts/FlexBox'

const ShareProfileButtons = () => {
  const { setSnackBar } = useSnackBar()

  const handleClickCopyToClipboard = () => {
    setSnackBar({
      comment: '클립보드에 복사되었어요.',
      type: 'success',
    })
  }

  return (
    <ProfileButtonWrapper>
      <SquareButton variant="mediumSquare" subVariant="default">
        <Svg
          children={<SaveIcon />}
          width={20}
          height={20}
          style={{ margin: '0 4px 0 0' }}
        />
        이미지 저장하기
      </SquareButton>
      <CopyToClipboard
        text="https://tify-client.vercel.app/profile"
        onCopy={handleClickCopyToClipboard}
      >
        <SquareButton variant="mediumSquare" subVariant="default">
          <Svg
            children={<LinkIcon />}
            width={20}
            height={20}
            style={{ margin: '0 4px 0 0' }}
          />
          링크 복사하기
        </SquareButton>
      </CopyToClipboard>
    </ProfileButtonWrapper>
  )
}

export default ShareProfileButtons

const ProfileButtonWrapper = styled(FlexBox)`
  gap: 12px;
`
