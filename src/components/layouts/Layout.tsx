import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';
const Layout = () => {
    return(
        <MainContainer>
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
  background-color: #000000;
`;