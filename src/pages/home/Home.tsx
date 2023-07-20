import React from 'react';
import styled from '@emotion/styled';
import { AppBar } from '@components/atoms/AppBar';

const Home = () => {
  return (
    <>
    <AppBar variant='logoWithAlarm'/>
    <Wrapper>
      메인페이지입니다.
    </Wrapper>
  </>);
};

export default Home;

const Wrapper = styled.div`
  color: #fff;
`;
