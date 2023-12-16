import styled from '@emotion/styled'
import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { palette } from '@styles/theme/palette'
import { Draggable } from 'react-beautiful-dnd'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import OpenEye from '@assets/icons/OpenEye'
import Ordering from '@assets/icons/Ordering'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import CloseEye from '@assets/icons/CloseEye'

export type FriendsListCProps = {
  id: number
  userName: string
  neighborId: number
  imageUrl: string
  view: boolean
  onClick?: () => void
}

const DragDropFriend = ({
  id,
  neighborId,
  userName,
  imageUrl = '',
  view,
  onClick,
  ...props
}: FriendsListCProps) => {
  const queryClient = useQueryClient()
  const friendViewMutation = useMutation(FriendsApi.VIEW_FRIEND, {
    onSettled: () => {
      queryClient.invalidateQueries(['friendList'])
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['neighborInfo'])
    },
  })

  const [canView, setView] = useState(view)

  return (
    <Draggable
      draggableId={String(neighborId)}
      key={userName}
      index={id}
      isDragDisabled={canView ? false : true}
    >
      {(provided) => (
        <Wrapper
          {...props}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <FriendsProfileWrapper>
            <Avatar
              variant="small"
              imageUrl={imageUrl}
              isVisible={canView ? 'visible' : 'invisible'}
            />
            <FriendsInfoWrapper>
              <Text typo="Subhead_14" color={canView ? 'white' : 'gray_400'}>
                {userName}
              </Text>
              <Text
                typo="Caption_12M"
                color={canView ? 'gray_300' : 'gray_400'}
              >
                @eugene028
              </Text>
            </FriendsInfoWrapper>
          </FriendsProfileWrapper>
          <FlexBox gap={16}>
            <div
              onClick={() => {
                setView(!canView)
                friendViewMutation.mutate(neighborId)
              }}
            >
              {canView ? <OpenEye /> : <CloseEye />}
            </div>
            <div
              style={{ cursor: 'pointer', width: '30px' }}
              {...provided.dragHandleProps}
            >
              <Ordering />
            </div>
          </FlexBox>
        </Wrapper>
      )}
    </Draggable>
  )
}

export default DragDropFriend
const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  background-color: ${palette.background};
`

const FriendsProfileWrapper = styled(FlexBox)`
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  width: 180px;
  height: 100%;
`

const FriendsInfoWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`
