import styled from '@emotion/styled'

import { palette } from '@styles/theme/palette'
import { FriendsListDPropsType } from '@models/components/atoms/FriendsList'
import { FlexBox } from '@components/layouts/FlexBox'
import FriendsListInfo from './FriendsListInfo'
import FriendsListButton from './FriendsListButton'

/**
 * @param userId 친구 아이디를 나타냄
 * @param friendsNumber 친구 수를 나타냄
 * @param isAccepted 친구 수락 여부를 나타냄
 * @param onClick 친구 리스트를 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 * @param onAcceptButtonClick 수락 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 * @param onDeleteButtonClick 삭제 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 */

const FriendsListD = ({
  userId,
  friendsNumber,
  isAccepted = false,
  onClick,
  onAcceptButtonClick,
  onDeleteButtonClick,
}: FriendsListDPropsType) => {
  return (
    <Wrapper onClick={onClick}>
      <FriendsListInfo userId={userId} friendsNumber={friendsNumber} />
      <FriendsListButton
        isAccepted={isAccepted}
        onAcceptButtonClick={onAcceptButtonClick}
        onDeleteButtonClick={onDeleteButtonClick}
      />
    </Wrapper>
  )
}

export default FriendsListD

const Wrapper = styled(FlexBox)`
  width: 328px;
  height: 48px;
  background-color: ${palette.background};
  justify-content: space-between;
  cursor: pointer;
`
