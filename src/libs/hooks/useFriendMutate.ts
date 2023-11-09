import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'

const useFriendMutate = () => {
  const queryClient = useQueryClient()

  const { mutate: acceptFriendRequestMutate } = useMutation(
    FriendsApi.ACCEPT_FRIEND_REQUEST,
    {
      onSuccess: () => queryClient.invalidateQueries(['friendRequestList']),
    },
  )

  const { mutate: rejectFriendRequestMutate } = useMutation(
    FriendsApi.REJECT_FRIEND_REQUEST,
    {
      onSuccess: () => queryClient.invalidateQueries(['friendRequestList']),
    },
  )

  const { mutate: requestFriendMutate } = useMutation(
    FriendsApi.REQUEST_FRIEND,
    {
      onSuccess: () => queryClient.invalidateQueries(['friendRequestList']),
    },
  )

  return {
    acceptFriendRequestMutate,
    rejectFriendRequestMutate,
    requestFriendMutate,
  }
}

export default useFriendMutate
