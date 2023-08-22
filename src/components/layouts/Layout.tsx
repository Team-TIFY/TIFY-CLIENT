import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';
import { theme } from '@styles/theme';
import { AppBar } from '@components/atoms/AppBar';
import { useRecoilValue } from 'recoil';
import { userState } from '@libs/store/user';
import { Navigationbar } from '@components/atoms/Navigationbar';

const Layout = () => {
  const location = useLocation();
  const userData = useRecoilValue(userState);
  
  return(
    <MainContainer>
      {/* <AppBar
        variant={location.pathname === '/myprofile' ? 'backPushWithMenu' : 'logoWithAlarm'}
        label={location.pathname === '/myprofile' ? userData.userName : ''}
      /> */}
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