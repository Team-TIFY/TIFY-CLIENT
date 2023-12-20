import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useSetFriendRecoilState } from './useSetFriendRecoilState'
import useSnackBar from '@libs/hooks/useSnackBar'

const useFriendMutate = () => {
  const queryClient = useQueryClient()
  const { setSnackBar } = useSnackBar()
  const {
    setIsBlockMenuOpen,
    setIsMenuOpen,
    setIsCutOffMenuOpen,
    setIsCancelBlockMenuOpen,
  } = useSetFriendRecoilState()
  const { mutate: acceptFriendRequestMutate } = useMutation(
    FriendsApi.ACCEPT_FRIEND_REQUEST,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userProfile'])
      },
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
      onSuccess: () => {
        queryClient.invalidateQueries(['userProfile'])
        queryClient.invalidateQueries(['friendRequestList'])
        setSnackBar({
          comment: '요청이 수락되면 알려드릴게요',
          type: 'success',
        })
      },
    },
  )

  const { mutate: reportFriendMutate } = useMutation(FriendsApi.REPORT_FRIEND, {
    onSuccess: () => {
      setIsMenuOpen(false)
      setSnackBar({
        comment: '신고가 완료되었어요. 빠르게 확인 후 처리할게요',
        type: 'success',
      })
    },
    onError: () => {
      setIsMenuOpen(false)
    },
  })

  const { mutate: blockFriendMutate } = useMutation(FriendsApi.BLOCK_FRIEND, {
    onSuccess: () => {
      setIsBlockMenuOpen(false)
      queryClient.invalidateQueries(['userProfile'])
      queryClient.invalidateQueries(['friendsList'])
      queryClient.invalidateQueries(['birthdayFriendsList'])
      setSnackBar({
        comment: '차단이 완료되었어요.',
        type: 'success',
      })
    },
    onError: () => {
      setIsBlockMenuOpen(false)
    },
  })

  const { mutate: cancelBlockFriendMutate } = useMutation(
    FriendsApi.CANCEL_BLOCK_FRIEND,
    {
      onSuccess: () => {
        setIsCancelBlockMenuOpen(false)
        queryClient.invalidateQueries(['userProfile'])
        queryClient.invalidateQueries(['friendRequestList'])
        setSnackBar({
          comment: '차단이 해제되었어요',
          type: 'success',
        })
      },
      onError: () => {
        setIsCancelBlockMenuOpen(false)
      },
    },
  )

  const { mutate: cutOffFriendMutate } = useMutation(
    FriendsApi.CUT_OFF_FRIEND,
    {
      onSuccess: () => {
        setIsCutOffMenuOpen(false)
        queryClient.invalidateQueries(['userProfile'])
        queryClient.invalidateQueries(['friendsList'])
        queryClient.invalidateQueries(['birthdayFriendsList'])
        setSnackBar({
          comment: '친구 관계를 끊었어요',
          type: 'success',
        })
      },
      onError: () => {
        setIsCutOffMenuOpen(false)
      },
    },
  )

  const { mutate: removeNewFriendMutate } = useMutation(
    FriendsApi.REMOVE_NEW_FRIEND,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['newFriendsList'])
      },
    },
  )

  return {
    acceptFriendRequestMutate,
    rejectFriendRequestMutate,
    requestFriendMutate,
    reportFriendMutate,
    blockFriendMutate,
    cancelBlockFriendMutate,
    cutOffFriendMutate,
    removeNewFriendMutate,
  }
}

export default useFriendMutate
