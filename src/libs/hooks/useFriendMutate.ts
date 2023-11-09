import { snackBarState } from '@libs/store/snackBar'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useSetRecoilState } from 'recoil'
import { useSetFriendRecoilState } from './useSetFriendRecoilState'

const useFriendMutate = () => {
  const queryClient = useQueryClient()
  const {
    setIsBlockMenuOpen,
    setIsMenuOpen,
    setIsCutOffMenuOpen,
    setIsCancelBlockMenuOpen,
  } = useSetFriendRecoilState()
  const setSnackBarStateData = useSetRecoilState(snackBarState)

  const { mutate: acceptFriendRequestMutate } = useMutation(
    FriendsApi.ACCEPT_FRIEND_REQUEST,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['friendProfile'])
        queryClient.invalidateQueries(['friendRequestList'])
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
        queryClient.invalidateQueries(['friendProfile'])
        queryClient.invalidateQueries(['friendRequestList'])
        setSnackBarStateData((prevState) => ({
          ...prevState,
          isSnackBarOn: true,
          message: '요청이 수락되면 알려드릴게요.',
        }))
      },
    },
  )

  const { mutate: reportFriendMutate } = useMutation(FriendsApi.REPORT_FRIEND, {
    onSuccess: () => {
      setIsMenuOpen(false)
      setSnackBarStateData((prevState) => ({
        ...prevState,
        isSnackBarOn: true,
        message: '신고가 완료되었어요. 빠르게 확인 후 처리할게요.',
      }))
    },
    onError: () => {
      setIsMenuOpen(false)
    },
  })

  const { mutate: blockFriendMutate } = useMutation(FriendsApi.BLOCK_FRIEND, {
    onSuccess: () => {
      setIsBlockMenuOpen(false)
      queryClient.invalidateQueries(['friendProfile'])
      queryClient.invalidateQueries(['friendsList'])
      queryClient.invalidateQueries(['birthdayFriendsList'])
      setSnackBarStateData((prevState) => ({
        ...prevState,
        isSnackBarOn: true,
        message: '차단이 완료되었어요.',
      }))
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
        queryClient.invalidateQueries(['friendProfile'])
        queryClient.invalidateQueries(['friendRequestList'])
        setSnackBarStateData((prevState) => ({
          ...prevState,
          isSnackBarOn: true,
          message: '차단이 해제되었어요.',
        }))
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
        queryClient.invalidateQueries(['friendProfile'])
        queryClient.invalidateQueries(['friendsList'])
        queryClient.invalidateQueries(['birthdayFriendsList'])
        setSnackBarStateData((prevState) => ({
          ...prevState,
          isSnackBarOn: true,
          message: '친구 관계를 끊었어요.',
        }))
      },
      onError: () => {
        setIsCutOffMenuOpen(false)
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
  }
}

export default useFriendMutate
