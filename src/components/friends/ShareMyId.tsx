import LinkIcon from '@assets/icons/LinkIcon'
import ShareIcon from '@assets/icons/ShareIcon'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'

const ShareMyId = () => {
  return (
    <>
      <Text
        typo="Caption_12R"
        children="내 ID 공유하기"
        color="gray_100"
        style={{ padding: '16px' }}
      />
      <FlexBox gap={12}>
        <SquareButton variant="mediumSquare">
          <Svg
            children={<LinkIcon />}
            width={20}
            height={20}
            style={{ margin: '0 4px 0 0' }}
          />
          링크 복사하기
        </SquareButton>
        <SquareButton variant="mediumSquare">
          <Svg
            children={<ShareIcon />}
            width={20}
            height={20}
            style={{ margin: '0 4px 0 0' }}
          />
          공유하기
        </SquareButton>
      </FlexBox>
    </>
  )
}
export default ShareMyId
