import React from 'react';
import styled from '@emotion/styled';

interface SvgProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Svg = ({ children, onClick }: SvgProps) => {
  return (
    <SvgWrapper onClick={onClick}>
      {children}
    </SvgWrapper>
  );
};

const SvgWrapper = styled.div`
  display: inline-block;
`;

export default Svg;