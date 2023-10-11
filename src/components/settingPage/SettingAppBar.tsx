import LeftArrow from '@assets/icons/LeftArrow'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type SettingAppBarProps = {
  children: ReactNode
  label: string
}
const SettingAppBar = ({ label, children }: SettingAppBarProps) => {
  const navigate = useNavigate()

  const onClickBackBar = () => {
    navigate(-1)
  }
  return (
    <>
      <AppBarWrapper>
        <FlexBox>
          <Svg children={<LeftArrow />} onClick={onClickBackBar} />
          <TitleWrap>
            <Text children={label} typo="Body_16" color="gray_100" />
          </TitleWrap>
        </FlexBox>
      </AppBarWrapper>

      {children}
    </>
  )
}

export default SettingAppBar

const AppBarWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  padding: 40px 16px 16px 16px;
  background-color: ${theme.palette.background};
  z-index: 100;
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`
