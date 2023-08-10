import { FlexBox } from "@components/layouts/FlexBox";
import styled from "@emotion/styled";

interface XIconProps{
  onClick?: () => void;
}

export function XIcon({ onClick }: XIconProps){
  return (
    <FlexBox>
      <Wrapper onClick={onClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1387_3668)">
        <path d="M12 4L4 12" stroke="#E4E4E5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 4L12 12" stroke="#E4E4E5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1387_3668">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>          
      </Wrapper>
    </FlexBox>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
`