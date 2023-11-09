import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { friendState } from '@libs/store/friend'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { Spacing } from '@components/atoms/Spacing'
import FriendRequest from '@components/friends/FriendRequest'
import ShareMyId from '@components/friends/ShareMyId'
import AddFriendById from '@components/friends/AddFriendById'

const AddFriend = () => {
  const friendStateData = useRecoilValue(friendState)
  const { setIsToggle } = useSetFriendRecoilState()

  useEffect(() => {
    setIsToggle(false)
  }, [])

  const renderFriendRequestAndShareMyId = () => {
    if (!friendStateData.isToggle) {
      return (
        <>
          <Spacing height={32} />
          <FriendRequest />
          <ShareMyId />
        </>
      )
    }
  }

  return (
    <>
      <AddFriendById />
      {renderFriendRequestAndShareMyId()}
    </>
  )
}

export default AddFriend
