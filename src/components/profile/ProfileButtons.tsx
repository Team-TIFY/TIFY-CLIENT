import { Spacing } from '@components/atoms/Spacing'
import SquareButton from '@components/atoms/SquareButton'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { profileState } from '@libs/store/profile'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

const ProfileButtons = () => {
  const navigate = useNavigate()

  const [profileStateData, setIsMenuOpen] = useRecoilState(profileState)

  const handleClickEditProfile = () => {
    navigate('/profile/edit-profile')
  }

  const handleClickCancel = () => {
    setIsMenuOpen({ ...profileStateData, isMenuOpen: false })
  }

  return (
    <ProfileButtonsWrapper>
      <SquareButton
        variant="xlargeSquare"
        subVariant="default"
        xlargeVariant="top"
        children="프로필 수정"
        onClick={handleClickEditProfile}
      />
      <SquareButton
        variant="xlargeSquare"
        subVariant="default"
        xlargeVariant="foot"
        children="프로필 공유"
      />
      <Spacing height={8} />
      <SquareButton
        variant="xlargeSquare"
        subVariant="default"
        xlargeVariant="alone"
        children="취소"
        onClick={handleClickCancel}
      />
      <Spacing height={32} />
    </ProfileButtonsWrapper>
  )
}

export default ProfileButtons

const ProfileButtonsWrapper = styled(FlexBox)`
  flex-direction: column;
  z-index: 999;
  position: fixed;
  top: calc(100vh - 184px);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
`
