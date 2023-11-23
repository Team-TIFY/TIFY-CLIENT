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

const LogOutBtn = () => {
  const auth = useRecoilValue(authState)
  const [isLogOutOpen, setIsLogOutOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const [outsideRef, handleClickLogOutDimmer] = useOutsideClick(() =>
    setIsLogOutOpen(false),
  )

  const onClickLogOut = useMutation(SettingApi.POST_LOGOUT, {
    onSuccess: () => {
      alert('로그아웃 완료!')
      navigate('/login')
    },
  })

  return (
    <SettingList>
      <Wrap onClick={() => setIsLogOutOpen(true)}>
        <LogoutIcon />
        <Margin />
        <Text children="로그아웃" typo="Body_16" color="gray_100" />
      </Wrap>
      {isLogOutOpen && (
        <>
          <Dimmer dimmerRef={outsideRef} onClick={handleClickLogOutDimmer} />{' '}
          <ProfileButtonsWrapper>
            <SquareButton
              variant="xlargeSquare"
              subVariant="default"
              xlargeVariant="LogOutBtn"
              children={'@' + `${auth.userProfile.userId}` + ' 계정에서'}
              xlargeChildren="로그아웃 하시겠습니까?"
              textColor="gray_100"
            />
            <SquareButton
              variant="xlargeSquare"
              subVariant="default"
              xlargeVariant="foot"
              children="로그아웃"
              textColor="red_500"
              onClick={onClickLogOut.mutate}
            />
            <Spacing height={8} />
            <SquareButton
              variant="xlargeSquare"
              subVariant="default"
              xlargeVariant="alone"
              children="취소"
              onClick={() => setIsLogOutOpen(false)}
            />
          </ProfileButtonsWrapper>
        </>
      )}
    </SettingList>
  )
}

export default LogOutBtn

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
const SettingList = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  padding: 16px 20px 16px 16px;
  align-items: center;
  justify-content: space-between;
`
const Margin = styled.div`
  width: 8px;
`

const Height = styled.div`
  height: 24px;
`

const Wrap = styled.div`
  display: flex;
`
