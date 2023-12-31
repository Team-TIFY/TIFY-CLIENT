import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from '@emotion/styled'

import useFriendMutate from '@libs/hooks/useFriendMutate'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { authState } from '@libs/store/auth'
import { ProfileHeaderPropsType } from '@models/components/Profile/profile'
import { Spacing } from '@components/atoms/Spacing'
import { UserDetail } from './UserDetail'
import ProfileHeaderButtonListItem from './ProfileHeaderButtonListItem'

export const ProfileHeader = ({
  userData,
  addFriend = false,
}: ProfileHeaderPropsType) => {
  const { setIsCutOffMenuOpen, setIsCancelBlockMenuOpen } =
    useSetFriendRecoilState()
  const auth = useRecoilValue(authState)

  const friend = useParams()
  const { requestFriendMutate, acceptFriendRequestMutate } = useFriendMutate()
  const navigate = useNavigate()

  const handleClickPastToday = () => {
    friend.id
      ? navigate(`/profile/pastToday/${friend.id}`)
      : navigate(`/profile/pastToday/${auth.userProfile.id}`)
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
        <ProfileHeaderButtonListItem
          buttons={[
            { text: '지난 투데이', onClick: handleClickPastToday },
            { text: '차단 해제', onClick: handleClickCancelBlockFriend },
          ]}
        />
      )
    }

    if (
      (!userData.friend && auth.userProfile.userId !== userData.userId) ||
      addFriend
    ) {
      if (userData.friend) {
        return <ProfileHeaderButtonListItem buttons={[{ text: '수락됨' }]} />
      }

      if (!userData.receivedApplication && !userData.sentApplication) {
        return (
          <ProfileHeaderButtonListItem
            buttons={[
              { text: '친구 신청하기', onClick: handleClickRequestFriend },
            ]}
          />
        )
      }

      if (userData.receivedApplication && !userData.sentApplication) {
        return (
          <ProfileHeaderButtonListItem
            buttons={[{ text: '수락하기', onClick: handleClickAcceptFriend }]}
          />
        )
      }

      if (!userData.receivedApplication && userData.sentApplication) {
        return (
          <ProfileHeaderButtonListItem
            buttons={[{ text: '요청됨', onClick: handleClickRequestedFriend }]}
          />
        )
      }
    }

    return (
      <ProfileHeaderButtonListItem
        buttons={[
          { text: '지난 투데이', onClick: handleClickPastToday },
          {
            text: userData.friend ? '친구' : '새로운 취향 답변',
            onClick: userData.friend ? handleClickFriend : handleClickNewTaste,
          },
        ]}
      />
    )
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
