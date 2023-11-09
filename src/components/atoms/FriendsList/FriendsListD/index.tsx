import { Avatar } from '@components/atoms/Avatar'
import SquareButton from '@components/atoms/SquareButton'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { palette } from '@styles/theme/palette'
import { sliceString } from '@utils/sliceString'

/**
 * @param userId 친구 아이디를 나타냄
 * @param friendsNumber 친구 수를 나타냄
 * @param isAccepted 친구 수락 여부를 나타냄
 * @param onAcceptButtonClick 수락 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 * @param onDeleteButtonClick 삭제 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 */

interface FriendsListDProps {
  userId: string
  friendsNumber: number
  isAccepted?: boolean
  onAcceptButtonClick?: () => void
  onDeleteButtonClick?: () => void
}

const FriendsListD = ({
  userId,
  friendsNumber,
  isAccepted = false,
  onAcceptButtonClick,
  onDeleteButtonClick,
}: FriendsListDProps) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <Avatar variant="small" />
        <InfoWrapper>
          <Text typo="Subhead_14" color="white">
            @{sliceString(userId, 12)}
          </Text>
          <Text typo="Caption_10" color="gray_400">
            함께 아는 친구 {friendsNumber}명
          </Text>
        </InfoWrapper>
      </ProfileWrapper>
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
              onClick={onAcceptButtonClick}
              subVariant="default"
            >
              수락
            </SquareButton>
            <SquareButton
              variant="xsmallSquareS"
              onClick={onDeleteButtonClick}
              subVariant="default"
            >
              삭제
            </SquareButton>
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  )
}

export default FriendsListD

const Wrapper = styled(FlexBox)`
  width: 328px;
  height: 48px;
  background-color: ${palette.background};
  justify-content: space-between;
`

const ProfileWrapper = styled(FlexBox)`
  width: 180px;
  height: 100%;
  gap: 12px;
  justify-content: flex-start;
`

const InfoWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`

const ButtonWrapper = styled(FlexBox)`
  width: 132px;
  height: 100%;
  gap: 4px;
`
