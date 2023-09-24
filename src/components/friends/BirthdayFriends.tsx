import FriendsListB from '@components/atoms/FriendsList/FriendsListB'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import styled from '@emotion/styled'

const BirthdayFriends = () => {
  return (
    <>
      <FlexBox justify={'flex-start'} style={{ padding: '16px' }}>
        <Text
          typo={'Caption_12R'}
          children={'생일인 친구'}
          color="gray_100"
          style={{ margin: '0 4px 0 0' }}
        />
        <Text typo={'Mont_Caption_12M'} children={2} color="gray_400" />
      </FlexBox>
      <Padding size={[0, 16]}>
        <FriendsListWrapper>
          <FriendsListB
            name="김민준"
            imageUrl=""
            currentState="음악적 재능을 향상시키는 중"
            description="birthday"
            birthdayDescription="오늘"
            birthday="8월 8일"
          />
          <FriendsListB
            name="김초연"
            imageUrl=""
            currentState="복싱 연습 중 🥊"
            description="birthday"
            birthdayDescription="내일"
            birthday="8월 9일"
          />
          <FriendsListB
            name="홍서현"
            imageUrl=""
            currentState="요리 배우는 중 👩‍🍳"
            description="birthday"
            birthdayDescription=""
            birthday="8월 12일"
          />
        </FriendsListWrapper>
      </Padding>
      <Spacing height={16} />
    </>
  )
}

export default BirthdayFriends

const FriendsListWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 16px;
`
