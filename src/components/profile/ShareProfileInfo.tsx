import TifySmallLogo from '@assets/icons/TifySmallLogo'
import Svg from '@components/atoms/Svg'
import styled from '@emotion/styled'
import useGetDate from '@libs/hooks/useGetDate'
import { authState } from '@libs/store/auth'
import { theme } from '@styles/theme'
import { useRecoilValue } from 'recoil'
import { Text } from '@components/atoms/Text'
import backgroundImageUrl from '@assets/image/profile_background.png'
import shadowImageUrl from '@assets/image/profile_shadow.png'
import profileBoxImageUrl from '@assets/image/profile_box.png'

const ShareProfileInfo = () => {
  const auth = useRecoilValue(authState)
  const { getFormattedDate } = useGetDate()

  return (
    <ProfileInfoWrapper>
      <ProfileImageBoxWrapper>
        <StyledBackgroundImage src={backgroundImageUrl} />
        <StyledShadowImage src={shadowImageUrl} />
        <StyledProfileBoxImage src={profileBoxImageUrl} />
      </ProfileImageBoxWrapper>
      <Text typo="Headline_16" color="gray_100">
        {'@' + auth.userProfile.userId}
      </Text>
      <Text
        typo="Mont_Caption_12M"
        color="gray_400"
        style={{ marginBottom: '20px' }}
      >
        {getFormattedDate(auth.userProfile.birth)}
      </Text>
      <Svg children={<TifySmallLogo />} />
    </ProfileInfoWrapper>
  )
}

export default ShareProfileInfo

const ProfileInfoWrapper = styled.div`
  background-color: rgba(23, 23, 28, 0.8);
  width: 228px;
  height: 323px;
  border-radius: 10px;
  padding: 14px;
  position: relative;
  z-index: 999;
`

const ProfileImageBoxWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 12px;
  position: relative;
  background-color: ${theme.palette.background};
`

const StyledBackgroundImage = styled.img`
  width: 200px;
  height: 186px;
  top: 14px;
  position: absolute;
  border-radius: 10px;
  z-index: 999;
`

const StyledShadowImage = styled.img`
  position: absolute;
  width: 110px;
  height: 20px;
  left: 47px;
  bottom: 10px;
  z-index: 1000;
`

const StyledProfileBoxImage = styled.img`
  position: absolute;
  width: 137px;
  height: 152px;
  top: 30px;
  left: 32px;
  z-index: 1002;
`
