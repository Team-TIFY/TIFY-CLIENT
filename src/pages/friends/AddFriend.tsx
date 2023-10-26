import { Spacing } from '@components/atoms/Spacing'
import AddFriendById from '@components/friends/AddFriendById'
import FriendRequest from '@components/friends/FriendRequest'
import ShareMyId from '@components/friends/ShareMyId'

const AddFriend = () => {
  return (
    <>
      <AddFriendById />
      <Spacing height={32} />
      <FriendRequest />
      <Spacing height={64} />
      <ShareMyId />
    </>
  )
}

export default AddFriend
