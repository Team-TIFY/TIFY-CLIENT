import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { friendState } from '@libs/store/friend'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { Spacing } from '@components/atoms/Spacing'
import FriendRequest from '@components/friends/AddFriend/FriendRequest'
import ShareMyId from '@components/friends/AddFriend/ShareMyId'
import AddFriendById from '@components/friends/AddFriend/AddFriendById'

const AddFriend = () => {
  const friendStateData = useRecoilValue(friendState)
  const { setIsToggle } = useSetFriendRecoilState()

  useEffect(() => {
    setIsToggle(false)
  }, [])

  return (
    <>
      <AddFriendById />
      {friendStateData.isToggle || (
        <>
          <Spacing height={32} />
          <FriendRequest />
          <ShareMyId />
        </>
      )}
    </>
  )
}

export default AddFriend
