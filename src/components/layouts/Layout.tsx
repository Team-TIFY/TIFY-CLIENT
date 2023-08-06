import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';
import { theme } from '@styles/theme';
import { AppBar } from '@components/atoms/AppBar';

const Layout = () => {
  const location = useLocation();
  
  return(
    <MainContainer>
      <AppBar variant={location.pathname === '/myprofile' ? 'backPushWithMenu' : 'logoWithAlarm'} />
      <Outlet/>
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
`;