import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'

/**
 * @param imageUrl 친구 프로필 이미지 url을 나타냄
 * @param userId 친구 아이디를 나타냄
 * @param userName 친구 이름을 나타냄
 * @param neighborsNumber 해당 친구와 함께 아는 친구 수를 나타냄
 */

type FriendsListEType = {
  imageUrl: string
  userId: string
  userName: string
  neighborsNumber: number
}

const FriendsListE = ({
  imageUrl = '',
  userId = '',
  userName = '',
  neighborsNumber = 0,
}: FriendsListEType) => {
  return (
    <FriendsListEWrapper>
      <Avatar variant="small" imageUrl={imageUrl ? imageUrl : ''} />
      <FlexBox direction="column" style={{ gap: '8px' }}>
        <FlexBox direction="column">
          <Text typo="Headline_20" children={`@` + userId} color="white" />
          <Text typo="Body_14" children={userName} color="gray_200" />
        </FlexBox>
        <Text
          typo="Caption_10"
          children={`함께 친구 ${neighborsNumber}명`}
          color="pink_300"
        />
      </FlexBox>
    </FriendsListEWrapper>
  )
}

export default FriendsListE

const FriendsListEWrapper = styled(FlexBox)`
  padding: 24px 0 16px 0;
  flex-direction: column;
  gap: 12px;
  width: 328px;
  height: 174px;
  border-radius: 16px;
  background-color: ${theme.palette.gray_900};
`
