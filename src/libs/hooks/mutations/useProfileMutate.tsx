import { authState } from '@libs/store/auth'
import { onboardingState } from '@libs/store/onboard'
import { useMutation } from '@tanstack/react-query'
import { UserApi } from '@apis/user/UserApi'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import useGetDate from '../useGetDate'
import useSnackBar from '@libs/hooks/useSnackBar'

const useProfileMutate = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const { setSnackBar } = useSnackBar()
  const info = useRecoilValue(onboardingState)
  const { getFormattedDateString } = useGetDate()
  const navigate = useNavigate()

  const { mutate: updateFriendProfileViewTimeMutate } = useMutation(
    UserApi.UPDATE_FRIEND_PROFILE_VIEW_TIME,
  )

  const { mutate: updateUserInfoMutate } = useMutation(
    UserApi.EDIT_USER_PROFILE,
    {
      onSuccess: () => {
        setAuth({
          ...auth,
          userProfile: {
            ...auth.userProfile,
            userName: info.username,
            userId: info.id,
            birth: getFormattedDateString(info.birth),
            onBoardingStatus: info.onBoardingState
              ? info.onBoardingState
              : auth.userProfile.onBoardingStatus,
          },
        }),
          setSnackBar({ comment: '수정이 완료되었어요', type: 'success' })
        navigate('/profile')
      },
    },
  )

  return {
    updateFriendProfileViewTimeMutate,
    updateUserInfoMutate,
  }
}

export default useProfileMutate
