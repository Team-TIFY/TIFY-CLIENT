import { Avatar } from '@components/atoms/Avatar'
import SquareButton from '@components/atoms/SquareButton'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { sliceString } from '@utils/sliceString'

interface FriendsListDProps {
  nickName: string
  friendsNumber: number
  onAcceptButtonClick?: () => void
  onDeleteButtonClick?: () => void
}

const FriendsListD = ({
  nickName,
  friendsNumber,
  onAcceptButtonClick,
  onDeleteButtonClick,
}: FriendsListDProps) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <Avatar variant="small" />
        <InfoWrapper>
          <Text typo="Subhead_14" color="white">
            @{sliceString(nickName, 12)}
          </Text>
          <Text typo="Caption_10" color="gray_400">
            함께 아는 친구 {friendsNumber}명
          </Text>
        </InfoWrapper>
      </ProfileWrapper>
      <ButtonWrapper>
        <SquareButton variant={'xsmallSquareP'} onClick={onAcceptButtonClick}>
          수락
        </SquareButton>
        <SquareButton variant={'xsmallSquareS'} onClick={onDeleteButtonClick}>
          삭제
        </SquareButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default FriendsListD

const Wrapper = styled(FlexBox)`
  width: 328px;
  height: 48px;
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
  gap: 2px;
`

const ButtonWrapper = styled(FlexBox)`
  height: 100%;
  gap: 4px;
`
