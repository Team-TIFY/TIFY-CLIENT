import { useRecoilValue } from 'recoil'
import styled from '@emotion/styled'

import useGetDate from '@libs/hooks/useGetDate'
import useProfileMutate from '@libs/hooks/useProfileMutate'
import { authState } from '@libs/store/auth'
import { onboardingState } from '@libs/store/onboard'
import { profileState } from '@libs/store/profile'
import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'

const EditProfileButton = () => {
  const auth = useRecoilValue(authState)
  const info = useRecoilValue(onboardingState)
  const profileStateData = useRecoilValue(profileState)

  const { updateUserInfoMutate } = useProfileMutate()
  const { getFormattedDateString } = useGetDate()

  const handleClickEditComplete = () => {
    updateUserInfoMutate({
      username: info.username,
      birth: getFormattedDateString(info.birth),
      thumbnail: auth.userProfile.imageUrl,
      userId: info.id,
      onBoardingStatus: info.onBoardingState
        ? info.onBoardingState
        : auth.userProfile.onBoardingStatus,
    })
  }

  return (
    <ButtonWrapper>
      <RoundButton
        variant="mediumRound"
        children="수정 완료"
        fullWidth={true}
        style={{ marginBottom: '9px' }}
        onClick={handleClickEditComplete}
        disabled={!profileStateData.isEdit}
      />
      <Spacing height={32} />
    </ButtonWrapper>
  )
}

export default EditProfileButton

const ButtonWrapper = styled.div`
  width: 312px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
`
