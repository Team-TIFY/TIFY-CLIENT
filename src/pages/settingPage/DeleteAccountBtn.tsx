import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import SquareButton from '@components/atoms/SquareButton'
import { LogoutIcon } from '@assets/icons/LogoutIcon'
import { Text } from '@components/atoms/Text'
import Dimmer from '@components/layouts/Dimmer'
import { useState } from 'react'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { SettingApi } from '@utils/apis/setting'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import { Delete } from '@assets/icons/Delete'

const DeleteAccountBtn = () => {
  const auth = useRecoilValue(authState)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const [outsideRef, handleClickLogOutDimmer] = useOutsideClick(() =>
    setIsMenuOpen(false),
  )

  return (
    <>
      <DeleteAccount onClick={() => setIsMenuOpen(true)}>
        <Delete />
        <Text children="계정 삭제" typo="Body_16" color="gray_200" />
      </DeleteAccount>
      {isMenuOpen && (
        <>
          <Dimmer dimmerRef={outsideRef} onClick={handleClickLogOutDimmer} />
          <ProfileButtonsWrapper>
            <SquareButton
              variant="xlargeSquare"
              subVariant="default"
              xlargeVariant="DeleteBtn"
              children={'@' + `${auth.userProfile.userId}` + ' 계정을'}
              xlargeChildren="정말 삭제하시겠습니까?"
              xlargeChildrenTwo="삭제된 계정은 복구할 수 없습니다."
              textColor="gray_100"
            />
            <SquareButton
              variant="xlargeSquare"
              subVariant="default"
              xlargeVariant="foot"
              children="삭제하기"
              textColor="red_500"
              // 계정삭제 api 연결 필요
            />
            <Spacing height={8} />
            <SquareButton
              variant="xlargeSquare"
              subVariant="default"
              xlargeVariant="alone"
              children="취소"
              onClick={() => setIsMenuOpen(false)}
            />
          </ProfileButtonsWrapper>
        </>
      )}
    </>
  )
}

export default DeleteAccountBtn

const ProfileButtonsWrapper = styled(FlexBox)`
  flex-direction: column;
  z-index: 999;
  position: fixed;
  top: calc(100vh - 216px);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
`
const DeleteAccount = styled.div`
  margin-top: 12px;
  padding: 16px 20px 16px 24px;
  display: flex;
  align-items: center;
`
