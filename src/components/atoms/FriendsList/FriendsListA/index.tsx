import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import {
  FriendsListAPropsType,
  FriendsListVariantType,
} from '@models/components/atoms/FriendsList'
import OpenEye from '@assets/icons/OpenEye'
import CloseEye from '@assets/icons/CloseEye'
import Ordering from '@assets/icons/Ordering'
import { Text } from '../../Text'
import { Avatar } from '../../Avatar'
import Svg from '../../Svg'

/**
 * @param variant FriendsList visible type을 나타냄 'visible' | 'invisible'
 * @param userName 친구 이름을 나타냄
 * @param userId 친구 아이디를 나타냄
 * @param onClick 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 */

export const FriendsListA = ({
  variant = 'visible',
  userName,
  userId,
  onClick,
}: FriendsListAPropsType) => {
  return (
    <Wrapper variant={variant}>
      <Avatar variant="small" isVisible={`${variant}`} />
      <NameWrapper>
        {variant === 'visible' ? (
          <Text children={userName} typo="Subhead_16" color="white" />
        ) : (
          <Text children={userName} typo="Subhead_16" color="gray_400" />
        )}
        <Text children={'@' + userId} typo="Caption_12M" color="gray_300" />
      </NameWrapper>
      <IconWrapper>
        {variant === 'visible' ? (
          <Svg children={<OpenEye />} />
        ) : (
          <Svg children={<CloseEye />} />
        )}
        <Svg children={<Ordering />} onClick={onClick} />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ variant: FriendsListVariantType }>`
  width: 312px;
  height: 48px;
  background-color: ${theme.palette.background};
  display: flex;
`

const NameWrapper = styled.div`
  width: 132px;
  margin-left: 16px;
  margin-right: 52px;
`

const IconWrapper = styled.div`
  display: flex;
  width: 64px;
  height: 24px;
  margin: auto 0;
  gap: 16px;
  justify-content: space-between;
`
