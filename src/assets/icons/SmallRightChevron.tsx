import styled from "@emotion/styled";
import React from "react";

const SmallRightChevron = ({ stroke = "#E4E4E5", onClick }: { stroke?: string; onClick?: () => void }) => {
  return (
    <Wrapper>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <g clip-path="url(#clip0_357_2385)">
          <path d="M6 12L10 8L6 4" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_357_2385">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
`;

export default SmallRightChevron;