import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import DragDropFriend from '@components/WeeklyQuestion/DragDropFriend'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import Loading from '@components/atoms/Loading'
import { useEffect, useState } from 'react'
import { DailyFriendsType } from '@models/apis/friends/FriendsType'

const EditFriendList = () => {
  const queryClient = useQueryClient()
  const [friendList, setFriendList] = useState<DailyFriendsType[]>([])
  const auth = useRecoilValue(authState)
  const reorderMutation = useMutation(FriendsApi.REORDER_FRIEND_LIST, {
    onSettled: () => {
      queryClient.invalidateQueries(['friendList'])
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['neighborInfo'])
    },
  })
  const { data, isLoading, isSuccess } = useQuery(
    ['friendList'],
    FriendsApi.GET_ALL_FRIENDS_LIST,
  )

  useEffect(() => {
    if (isSuccess) {
      data.sort((a, b) => {
        if (a.order !== null && b.order === null) {
          return -1
        } else if (a.order === null && b.order !== null) {
          return 1
        }
        return 0
      })
      setFriendList(data)
    }
  }, [data])

  const reorderList = (startIndex: number, endIndex: number) => {
    const [removed] = friendList.splice(startIndex, 1)
    friendList.splice(endIndex, 0, removed)
    setFriendList(friendList)
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    } else {
      reorderMutation.mutate({
        fromNeighborId: parseInt(result.draggableId, 10),
        toNeighborId: friendList[result.destination.index].neighborId,
      })
      reorderList(result.source.index, result.destination.index)
    }
  }
  if (isLoading) {
    return <Loading />
  }
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
      {friendList.length === 0 ? (
        <Text typo="Body_14" color="gray_400" style={{ padding: '100px' }}>
          아직 친구가 없어요. 친구를 추가해주세요.
        </Text>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="friendList">
            {(provided) => (
              <EditFriendListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {friendList.map((friend, index) => (
                  <DragDropFriend
                    key={index}
                    id={index}
                    view={friend.view}
                    neighborId={friend.neighborId}
                    userName={friend.neighborName}
                    imageUrl=""
                  />
                ))}
                {provided.placeholder}
              </EditFriendListContainer>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  )
}

export default EditFriendList

const TextBox = styled.div`
  padding: 32px 24px;
`

const EditFriendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
`
