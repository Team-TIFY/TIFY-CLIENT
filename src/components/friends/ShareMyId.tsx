import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import CopyMyIdButton from './CopyMyIdButton'
import ShareMyIdButton from './ShareMyIdButton'

const ShareMyId = () => {
  return (
    <FlexBox direction="column">
      <Text
        typo="Caption_12R"
        children="내 ID 공유하기"
        color="gray_100"
        style={{ padding: '16px', width: '328px' }}
      />
      <FlexBox gap={12}>
        <CopyMyIdButton />
        <ShareMyIdButton />
      </FlexBox>
    </FlexBox>
  )
}
export default ShareMyId
