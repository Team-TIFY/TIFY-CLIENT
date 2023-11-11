import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'

const NewFriends = () => {
  return (
    <FlexBox justify="flex-start" style={{ width: '100%', padding: '16px' }}>
      <Text
        typo="Caption_12R"
        children="새로운 친구"
        color="gray_100"
        style={{
          margin: '0 4px 0 0',
          border: '1px solid red',
        }}
      />
      <Text typo="Mont_Caption_12M" children={12} color="gray_400" />
    </FlexBox>
  )
}

export default NewFriends
