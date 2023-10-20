import { useMutation } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'

const useFriendMutate = () => {
  const { mutate: acceptFriendRequestMutate } = useMutation(
    FriendsApi.ACCEPT_FRIEND_REQUEST,
  )

  const { mutate: rejectFriendRequestMutate } = useMutation(
    FriendsApi.REJECT_FRIEND_REQUEST,
  )

  return { acceptFriendRequestMutate, rejectFriendRequestMutate }
}

export default useFriendMutate
