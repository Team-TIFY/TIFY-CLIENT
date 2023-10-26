import { useMutation } from '@tanstack/react-query'
import { UserApi } from '@utils/apis/user/UserApi'

const useProfileMutate = () => {
  const { mutate: updateFriendProfileViewTimeMutate } = useMutation(
    UserApi.UPDATE_FRIEND_PROFILE_VIEW_TIME,
  )

  return { updateFriendProfileViewTimeMutate }
}

export default useProfileMutate
