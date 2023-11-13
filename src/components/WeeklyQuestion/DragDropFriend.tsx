import styled from '@emotion/styled'
import { Avatar } from '@components/atoms/Avatar'
import { Text } from '@components/atoms/Text'
import type { Identifier, XYCoord } from 'dnd-core'
import { FlexBox } from '@components/layouts/FlexBox'
import { palette } from '@styles/theme/palette'
import { useDrag, useDrop } from 'react-dnd'

export type FriendsListCProps = {
  id: number
  userName: string
  neighborId: string
  imageUrl: string
  onClick?: () => void
}

const DragDropFriend = ({
  id: number,
  neighborId,
  userName,
  imageUrl = '',
  onClick,
  ...props
}: FriendsListCProps) => {
  // const [{handlerId, drop}] = useDrop<DragItem, void, {
  //   handlerId: Identifier | null }>({
  //     accept: 'friend', collect(monitor) {
  //       return {
  //         handlerId : monitor.getHandlerId(),
  //       }
  //     },
  //     hover(item: DragItem, monitor){
  //       if()
  //     }
  //   })
  // }
  return (
    <Wrapper {...props}>
      <FriendsProfileWrapper>
        <Avatar variant="small" imageUrl={imageUrl} />
        <FriendsInfoWrapper>
          <Text typo="Subhead_14" color="white">
            {userName}
          </Text>
        </FriendsInfoWrapper>
      </FriendsProfileWrapper>
    </Wrapper>
  )
}

export default DragDropFriend
const Wrapper = styled(FlexBox)`
  width: 328px;
  height: 48px;
  justify-content: space-between;
  background-color: ${palette.background};
  cursor: pointer;
`

const FriendsProfileWrapper = styled(FlexBox)`
  justify-content: space-between;
  gap: 12px;
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
