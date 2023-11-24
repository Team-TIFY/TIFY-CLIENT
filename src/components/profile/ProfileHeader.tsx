import { useNavigate, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import SquareButton from '@components/atoms/SquareButton'
import { UserDetail } from './UserDetail'
import { UserInfo } from '@utils/apis/user/UserType'
import useFriendMutate from '@libs/hooks/useFriendMutate'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'

interface ProfileHeaderProps {
  userData: UserInfo
  addFriend?: boolean
}

export const ProfileHeader = ({
  userData,
  addFriend = false,
}: ProfileHeaderProps) => {
  const { setIsCutOffMenuOpen, setIsCancelBlockMenuOpen } =
    useSetFriendRecoilState()
  const auth = useRecoilValue(authState)

  const friend = useParams()
  const { requestFriendMutate, acceptFriendRequestMutate } = useFriendMutate()
  const navigate = useNavigate()

  const handleClickPastToday = () => {
    navigate('/profile/pastToday')
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

  const handleClickCancelBlockFriend = () => {
    setIsCancelBlockMenuOpen(true)
  }

  const handleClickAcceptFriend = () => {
    friend.id && acceptFriendRequestMutate(parseInt(friend.id))
  }

  const handleClickRequestedFriend = () => {}

  const renderProfileHeaderButton = () => {
    if (userData.blocked) {
      return (
        <ButtonWrapper>
          <FlexBox justify="space-between">
            <SquareButton
              variant="mediumSquare"
              subVariant="default"
              children="지난 투데이"
              onClick={handleClickPastToday}
            />
            <SquareButton
              variant="mediumSquare"
              subVariant="default"
              children="차단 해제"
              onClick={handleClickCancelBlockFriend}
            />
          </FlexBox>
        </ButtonWrapper>
      )
    } else if (
      (!userData.friend && auth.userProfile.userId !== userData.userId) ||
      addFriend
    ) {
      if (!userData.receivedApplication && !userData.sentApplication) {
        return (
          <SquareButton
            variant="mediumSquare"
            subVariant="default"
            fullWidth={true}
            children="친구 신청하기"
            onClick={handleClickRequestFriend}
          />
        )
      } else if (userData.receivedApplication && !userData.sentApplication) {
        return (
          <SquareButton
            variant="mediumSquare"
            subVariant="default"
            fullWidth={true}
            children="수락하기"
            onClick={handleClickAcceptFriend}
          />
        )
      } else if (!userData.receivedApplication && userData.sentApplication) {
        return (
          <SquareButton
            variant="mediumSquare"
            subVariant="default"
            fullWidth={true}
            children="요청됨"
            onClick={handleClickRequestedFriend}
          />
        )
      }
    } else {
      return (
        <ButtonWrapper>
          <FlexBox justify="space-between">
            <SquareButton
              variant="mediumSquare"
              subVariant="default"
              children="지난 투데이"
              onClick={handleClickPastToday}
            />
            <SquareButton
              variant="mediumSquare"
              subVariant="default"
              children={userData.friend ? '친구' : '새로운 취향 답변'}
              onClick={
                userData.friend ? handleClickFriend : handleClickNewTaste
              }
            />
          </FlexBox>
        </ButtonWrapper>
      )
    }
  }

  return (
    <ProfileHeaderWrapper>
      <UserDetail userData={userData} />
      <Spacing height={20} />
      {renderProfileHeaderButton()}
    </ProfileHeaderWrapper>
  )
}

const ProfileHeaderWrapper = styled.div``

const ButtonWrapper = styled.div``
