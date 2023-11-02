import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'

const FriendNotFound = () => {
  return (
    <FlexBox>
      <Text
        typo="Subhead_14"
        children="사용자를 찾을 수 없어요."
        color="gray_200"
      />
    </FlexBox>
  )
}

export default FriendNotFound
