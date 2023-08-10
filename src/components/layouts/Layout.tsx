import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { theme } from '@styles/theme';
import { AppBar } from '@components/atoms/AppBar';
import { Navigationbar } from '@components/atoms/Navigationbar';

const Layout = () => {
    return(
        <MainContainer>
          <AppBar variant='logoWithAlarm'/>
          {/* <Navigationbar/> */}
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