import { useRecoilValue } from 'recoil'
import styled from '@emotion/styled'
import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import useGetDate from '@libs/hooks/useGetDate'
import useProfileMutate from '@libs/hooks/useProfileMutate'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { authState } from '@libs/store/auth'
import { isBtnColorState, onboardingState } from '@libs/store/onboard'
import { profileState } from '@libs/store/profile'

const EditProfileButton = () => {
  const btnColor = useRecoilValue(isBtnColorState)
  const auth = useRecoilValue(authState)
  const info = useRecoilValue(onboardingState)
  const profileStateData = useRecoilValue(profileState)

  const { setButtonText } = useSetProfileRecoilState()
  const { updateUserInfoMutate } = useProfileMutate()
  const { getFormattedDateString } = useGetDate()

  const handleClickCheckComplete = () => {
    setButtonText('수정 완료')
  }

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

  const getCompleteButtonClickHandler = () => {
    return profileStateData.buttonText === '수정 완료'
      ? handleClickEditComplete
      : handleClickCheckComplete
  }

  return (
    <ButtonWrapper>
      <RoundButton
        variant="mediumRound"
        children={profileStateData.buttonText}
        fullWidth={true}
        style={{ marginBottom: '9px' }}
        onClick={getCompleteButtonClickHandler()}
        disabled={!btnColor}
      />
      {profileStateData.buttonText === '수정 완료' && <Spacing height={32} />}
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
