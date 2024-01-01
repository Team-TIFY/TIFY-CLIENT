import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useMutation } from '@tanstack/react-query'

import { authState } from '@libs/store/auth'
import { onboardingState } from '@libs/store/onboard'
import useSnackBar from '@libs/hooks/useSnackBar'
import { UserApi } from '@apis/UserApi'
import useGetDate from '../useGetDate'

const useProfileMutate = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const info = useRecoilValue(onboardingState)

  const { setSnackBar } = useSnackBar()
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
