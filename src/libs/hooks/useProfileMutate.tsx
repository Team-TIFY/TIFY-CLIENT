import { authState } from '@libs/store/auth'
import { onboardingState } from '@libs/store/onboard'
import { useMutation } from '@tanstack/react-query'
import { OnboardingApi } from '@utils/apis/onboarding/OnboardingApi'
import { UserApi } from '@utils/apis/user/UserApi'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import useGetDate from './useGetDate'

const useProfileMutate = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const info = useRecoilValue(onboardingState)
  const { getFormattedDateString } = useGetDate()
  const navigate = useNavigate()

  const { mutate: updateFriendProfileViewTimeMutate } = useMutation(
    UserApi.UPDATE_FRIEND_PROFILE_VIEW_TIME,
  )

  const { mutate: updateUserInfoMutate } = useMutation(
    OnboardingApi.PUT_ONBOARD_STATUS,
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
          navigate('/profile')
      },
    },
  )

  return { updateFriendProfileViewTimeMutate, updateUserInfoMutate }
}

export default useProfileMutate
