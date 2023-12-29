import styled from '@emotion/styled'

import { FriendsListDButtonPropsType } from '@models/components/atoms/FriendsList'
import { FlexBox } from '@components/layouts/FlexBox'
import SquareButton from '@components/atoms/SquareButton'

const FriendsListButton = ({
  isAccepted,
  onAcceptButtonClick,
  onDeleteButtonClick,
}: FriendsListDButtonPropsType) => {
  return (
    <ButtonWrapper>
      {isAccepted ? (
        <SquareButton
          variant="xsmallSquareS"
          fullWidth={true}
          onClick={onAcceptButtonClick}
          subVariant="default"
        >
          팔로잉
        </SquareButton>
      ) : (
        <>
          <SquareButton
            variant="xsmallSquareP"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.stopPropagation()
              onAcceptButtonClick?.()
            }}
            subVariant="default"
          >
            수락
          </SquareButton>
          <SquareButton
            variant="xsmallSquareS"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.stopPropagation()
              onDeleteButtonClick?.()
            }}
            subVariant="default"
          >
            삭제
          </SquareButton>
        </>
      )}
    </ButtonWrapper>
  )
}

export default FriendsListButton

const ButtonWrapper = styled(FlexBox)`
  width: 132px;
  height: 100%;
  gap: 4px;
`
