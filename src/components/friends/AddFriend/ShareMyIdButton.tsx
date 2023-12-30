import ShareIcon from '@assets/icons/ShareIcon'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'

const ShareMyIdButton = () => {
  return (
    <SquareButton variant="mediumSquare" subVariant="default">
      <Svg
        children={<ShareIcon />}
        width={20}
        height={20}
        style={{ margin: '0 4px 0 0' }}
      />
      공유하기
    </SquareButton>
  )
}

export default ShareMyIdButton
