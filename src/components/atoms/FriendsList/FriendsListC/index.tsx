import styled from '@emotion/styled'

import { FriendsListCPropsType } from '@models/components/atoms/FriendsList'
import FriendListInfo from './FriendsListInfo'
import FriendsFavorItems from './FriendsFavorItems'

/**
 * @param userName 친구 이름을 나타냄
 * @param currentState 친구의 현재 상태를 나타냄 ex) 헬스장에서 운동 중 🏋️
 * @param imageUrl 친구 프로필 이미지 url을 나타냄
 * @param favorList 친구의 취향 상자 정보 세 가지를 나타냄
 * @param onClick 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 */

const FriendsListC = ({
  userName,
  currentState,
  imageUrl = '',
  favorList = ['LIP', 'EXERCISE', 'ACCESSORY'],
  onClick,
}: FriendsListCPropsType) => {
  return (
    <Wrapper onClick={onClick}>
      <FriendsFavorItems favorList={favorList} />
      <FriendListInfo
        imageUrl={imageUrl}
        userName={userName}
        currentState={currentState}
      />
    </Wrapper>
  )
}

export default FriendsListC

const Wrapper = styled.div`
  width: 156px;
  height: 217px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
`
