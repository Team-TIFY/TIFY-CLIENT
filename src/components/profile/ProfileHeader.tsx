import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import SquareButton from '@components/atoms/SquareButton'
import { UserDetail } from './UserDetail'
import { UserInfo } from '@utils/apis/user/UserType'
import useFriendMutate from '@libs/hooks/useFriendMutate'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'

interface ProfileHeaderProps {
  userData: UserInfo
  isFriend: boolean
  addFriend?: boolean
}

export const ProfileHeader = ({
  userData,
  isFriend,
  addFriend = false,
}: ProfileHeaderProps) => {
  const { setIsCutOffMenuOpen } = useSetFriendRecoilState()

  const friend = useParams()
  const { requestFriendMutate } = useFriendMutate()

  const handleClickPastDaily = () => {
    console.log('지난 데일리 버튼 클릭')
  }

  const handleClickNewTaste = () => {
    window.location.href = '/profile/newTaste'
  }

  const handleClickFriend = () => {
    setIsCutOffMenuOpen(true)
  }

  const handleClickRequestFriend = () => {
    friend.id && requestFriendMutate(parseInt(friend.id))
  }

  const renderProfileHeaderButton = () => {
    return addFriend ? (
      <SquareButton
        variant="mediumSquare"
        subVariant="default"
        fullWidth={true}
        children="친구 신청하기"
        onClick={handleClickRequestFriend}
      />
    ) : (
      <ButtonWrapper>
        <FlexBox justify="space-between">
          <SquareButton
            variant="mediumSquare"
            subVariant="default"
            children="지난 데일리"
            onClick={handleClickPastDaily}
          />
          <SquareButton
            variant="mediumSquare"
            subVariant="default"
            children={isFriend ? '친구' : '새로운 관심사 답변'}
            onClick={isFriend ? handleClickFriend : handleClickNewTaste}
          />
        </FlexBox>
      </ButtonWrapper>
    )
  }

  return (
    <ProfileHeaderWrapper>
      <UserDetail userData={userData} isFriend={isFriend} />
      <Spacing height={20} />
      {renderProfileHeaderButton()}
    </ProfileHeaderWrapper>
  )
}

const ProfileHeaderWrapper = styled.div``

const ButtonWrapper = styled.div``
