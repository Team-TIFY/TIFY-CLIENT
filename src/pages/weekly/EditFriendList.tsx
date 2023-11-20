import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import DragDropFriend from '@components/WeeklyQuestion/DragDropFriend'
import { useInfiniteQueries } from '@libs/hooks'

const EditFriendList = () => {
  const auth = useRecoilValue(authState)

  return (
    <>
      <TextBox>
        <Text typo="Headline_20" color="gray_100">
          순서를 바꾸거나
        </Text>
        <Text typo="Headline_20" color="gray_100">
          목록에서 숨길 수 있어요
        </Text>
      </TextBox>
      <DndProvider backend={HTML5Backend}>
        {/* <DragDropFriend
          id={1}
          userName="인절미"
          neighborId="@인절미"
          imageUrl=""
        />
        <DragDropFriend userName="조랭이" neighborId="@조랭이" imageUrl="" />
        <DragDropFriend userName="찹쌀이" neighborId="@찹쌀이" imageUrl="" /> */}
      </DndProvider>
    </>
  )
}

export default EditFriendList

const TextBox = styled.div`
  padding: 32px 24px;
`
