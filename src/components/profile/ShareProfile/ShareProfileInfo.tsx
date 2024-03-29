import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import useGetDate from '@libs/hooks/useGetDate'
import { authState } from '@libs/store/auth'
import { profileQueryKeys } from '@constants/queryKeys/profileQueryKeys'
import { UserApi } from '@apis/UserApi'
import { DetailCategoryValueType as TasteBoxVariantType } from '@models/common/favor'
import TifySmallLogo from '@assets/icons/TifySmallLogo'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
import ProfileBox from '@components/atoms/ProfileBox'

const ShareProfileInfo = () => {
  const auth = useRecoilValue(authState)
  const { getFormattedDate } = useGetDate()

  const { data: userFavorList = [] } = useQuery(
    [profileQueryKeys.USER_FAVOR_LIST, auth.userProfile.id],
    () => UserApi.GET_USER_FAVOR_BOX(auth.userProfile.id),
  )

  const filteredUserFavorList: TasteBoxVariantType[] = userFavorList?.map(
    (favor) => favor.detailCategory,
  )

  return (
    <ProfileInfoWrapper>
      <ProfileImageBoxWrapper>
        <ProfileBox variant="shareProfile" favorList={filteredUserFavorList} />
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
