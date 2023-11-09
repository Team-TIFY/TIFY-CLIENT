import { Delete } from '@assets/icons/Delete'
import { Text } from '@components/atoms/Text'
import Dimmer from '@components/layouts/Dimmer'
import styled from '@emotion/styled'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import { theme } from '@styles/theme'
import { useRef, useState } from 'react'

const Account = () => {
  const outsideRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleClickDimmer = useOutsideClick(outsideRef, () =>
    setIsMenuOpen(false),
  )

  return (
    <>
      <Wrapper>
        <Email>
          {/* 추후 해당 유저의 이메일로 넣어야함 */}
          <Text children="이메일" typo="Caption_12R" color="gray_400" />
          <Text children="~~@~~.com" typo="Subhead_16" color="gray_100" />
        </Email>
      </Wrapper>
      <DeleteAccount onClick={() => setIsMenuOpen(true)}>
        {/* 계정 삭제 기능 구현 필요 */}
        <Delete />
        <Text children="계정 삭제" typo="Body_16" color="gray_200" />
      </DeleteAccount>
      {isMenuOpen && (
        <>
          <Dimmer dimmerRef={outsideRef} onClick={handleClickDimmer} />
          {/* BottomSheet 추가 필요*/}
        </>
      )}
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
