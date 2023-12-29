import styled from '@emotion/styled'

import { palette } from '@styles/theme/palette'
import { FlexBox } from '@components/layouts/FlexBox'
import { Avatar } from '@components/atoms/Avatar'
import {
  FriendsListBPropsType,
  DescriptionType,
} from '@models/components/atoms/FriendsList'
import FriendsDescription from './FriendsDescription'
import FriendsCurrentState from './FriendCurrentState'

/**
 * @param userName 친구 이름을 나타냄
 * @param currentState 친구의 현재 상태를 나타냄 ex) 헬스장에서 운동 중 🏋️
 * @param onClick 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 * @param imageUrl 친구 프로필 이미지 url을 나타냄
 * @param description 친구 이름 하단에 들어갈 설명 글을 나타냄 'birthday' | 'none' | 'newUpdate'
 * @param birthdayDescription 생일이 언제인지 알려주는 필드임 '오늘' | '내일' | ''
 * @param birthday 생일 일자를 나타냄
 */

const FriendsListB = ({
  userName,
  currentState,
  imageUrl = '',
  description,
  birthday,
  birthdayDescription,
  ...props
}: FriendsListBPropsType<DescriptionType>) => {
  return (
    <Wrapper {...props}>
      <FriendsProfileWrapper>
        <Avatar variant="small" imageUrl={imageUrl} />
        <FriendsDescription
          description={description}
          userName={userName}
          birthdayDescription={birthdayDescription}
          birthday={birthday}
        />
      </FriendsProfileWrapper>
      <FriendsCurrentState currentState={currentState} />
    </Wrapper>
  )
}

export default FriendsListB

const Wrapper = styled(FlexBox)`
  height: 48px;
  justify-content: space-between;
  background-color: ${palette.background};
  cursor: pointer;
  width: 100%;
`

const FriendsProfileWrapper = styled(FlexBox)`
  justify-content: space-between;
  gap: 12px;
  width: 180px;
  height: 100%;
`
