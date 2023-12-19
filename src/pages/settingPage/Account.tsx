import { Delete } from '@assets/icons/Delete'
import { Text } from '@components/atoms/Text'
import Dimmer from '@components/layouts/Dimmer'
import styled from '@emotion/styled'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import { authState } from '@libs/store/auth'
import { theme } from '@styles/theme'
import { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import DeleteAccountBtn from './DeleteAccountBtn'

const Account = () => {
  const auth = useRecoilValue(authState)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [outsideRef, handleClickDimmer] = useOutsideClick(() =>
    setIsMenuOpen(false),
  )
  console.log(auth.userProfile)
  return (
    <>
      <Wrapper>
        <Email>
          <Text children="이메일" typo="Caption_12R" color="gray_400" />
          <Text
            children={auth.userProfile.email}
            typo="Subhead_16"
            color="gray_100"
          />
        </Email>
      </Wrapper>
      <DeleteAccountBtn />
    </>
  )
}

export default Account

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Email = styled.div`
  height: 82px;
  padding: 16px 4px 16px 8px;
  width: calc(100% - 32px);
  border-bottom: 0.3px solid ${theme.palette.gray_700};
`
const DeleteAccount = styled.div`
  margin-top: 12px;
  padding: 16px 20px 16px 24px;
  display: flex;
  align-items: center;
`
