import CopyIcon from '@assets/icons/CopyIcon'
import ShareIcon from '@assets/icons/ShareIcon'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { authState } from '@libs/store/auth'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useRecoilValue } from 'recoil'

const ShareMyId = () => {
  const auth = useRecoilValue(authState)

  return (
    <FlexBox direction="column">
      <Text
        typo="Caption_12R"
        children="내 ID 공유하기"
        color="gray_100"
        style={{ padding: '16px', width: '328px' }}
      />
      <FlexBox gap={12}>
        <CopyToClipboard
          text={`${auth.userProfile.userId}`}
          onCopy={() => console.log('복사 완료')}
        >
          <SquareButton variant="mediumSquare">
            <Svg
              children={<CopyIcon />}
              width={20}
              height={20}
              style={{ margin: '0 4px 0 0' }}
            />
            복사하기
          </SquareButton>
        </CopyToClipboard>
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
    </FlexBox>
  )
}
export default ShareMyId
