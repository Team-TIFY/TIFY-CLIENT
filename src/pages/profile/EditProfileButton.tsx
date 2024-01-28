import { useRecoilValue } from 'recoil'
import styled from '@emotion/styled'
import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import useGetDate from '@libs/hooks/useGetDate'
import useProfileMutate from '@libs/hooks/useProfileMutate'
import { authState } from '@libs/store/auth'
import { onboardingState } from '@libs/store/onboard'
import { profileState } from '@libs/store/profile'
import { motion } from 'framer-motion'

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
      <motion.button
        animate={{ scale: 0.95 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 300,
          duration: 0.1,
          delay: 0.12,
        }}
      >
        <RoundButton
          variant="mediumRound"
          children="수정 완료"
          fullWidth={true}
          style={{ marginBottom: '9px' }}
          onClick={handleClickEditComplete}
          disabled={!profileStateData.isEdit}
        />
      </motion.button>
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
