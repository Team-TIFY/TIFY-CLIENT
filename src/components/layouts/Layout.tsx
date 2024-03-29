import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { theme } from '@styles/theme'
import useSnackBar from '@libs/hooks/useSnackBar'
import { Spacing } from '@components/atoms/Spacing'
const Layout = () => {
  const { SnackBar } = useSnackBar()
  return (
    <MainContainer>
      <Outlet />
      <SnackBar />
    </MainContainer>
  )
}
export default Layout

const MainContainer = styled.main`
  position: relative;
  max-width: 480px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${theme.palette.background};
`
