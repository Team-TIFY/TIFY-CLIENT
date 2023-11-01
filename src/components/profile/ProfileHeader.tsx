import styled from '@emotion/styled'
import { Spacing } from '@components/atoms/Spacing'
import { FlexBox } from '@components/layouts/FlexBox'
import { UserInfo } from '@utils/apis/user/UserType'
import { UserDetail } from './UserDetail'
import SquareButton from '@components/atoms/SquareButton'
import useFriendMutate from '@libs/hooks/useFriendMutate'
import { useLocation, useParams } from 'react-router-dom'

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
  const { requestFriendMutate } = useFriendMutate()
  const friend = useParams()

  const handleClickPastDaily = () => {
    console.log('지난 데일리 버튼 클릭')
  }

  const handleClickNewTaste = () => {
    isFriend ? null : (window.location.href = '/profile/newTaste')
  }

  const handleClickRequestFriend = () => {
    friend.id && requestFriendMutate(parseInt(friend.id))
  }

  return (
    <ProfileHeaderWrapper>
      <UserDetail userData={userData} isFriend={isFriend} />
      <Spacing height={20} />
      {addFriend ? (
        <SquareButton
          variant="mediumSquare"
          fullWidth={true}
          children="친구 신청하기"
          onClick={handleClickRequestFriend}
        />
      ) : (
        <ButtonWrapper>
          <FlexBox justify="space-between">
            <SquareButton
              variant="mediumSquare"
              children="지난 데일리"
              onClick={handleClickPastDaily}
            />
            <SquareButton
              variant="mediumSquare"
              children={isFriend ? '친구' : '새로운 관심사 답변'}
              onClick={handleClickNewTaste}
            />
          </FlexBox>
        </ButtonWrapper>
      )}
    </ProfileHeaderWrapper>
  )
}

const ProfileHeaderWrapper = styled.div``

const ButtonWrapper = styled.div``
