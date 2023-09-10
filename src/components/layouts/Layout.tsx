import styled from '@emotion/styled'
import { Outlet, useLocation } from 'react-router-dom'
import { theme } from '@styles/theme'

const Layout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  )
}
export default Layout

const MainContainer = styled.main`
  position: relative;
  max-width: 480px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${theme.palette.background};
`
