import { Spacing } from '@components/atoms/Spacing'
import AddFriendById from '@components/friends/AddFriendById'
import FriendRequest from '@components/friends/FriendRequest'
import ShareMyId from '@components/friends/ShareMyId'
import { friendState } from '@libs/store/friend'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const AddFriend = () => {
  const [friendStateData, setFriendStateData] = useRecoilState(friendState)

  useEffect(() => {
    setFriendStateData((prevState) => ({ ...prevState, isToggle: false }))
  }, [])

  return (
    <>
      <AddFriendById />
      {!friendStateData.isToggle && (
        <>
          <Spacing height={32} />
          <FriendRequest />
          {friendStateData.showPartialRequest ? (
            <Spacing height={24} />
          ) : (
            <Spacing height={64} />
          )}
          <ShareMyId />
        </>
      )}
    </>
  )
}

export default AddFriend
