import styled from '@emotion/styled';
import { Agreement } from "./details/Agreement";


const Onboarding = () => {
  return (
    <Wrapper>
      <Agreement/>
    </Wrapper>
  );
};

export default Onboarding;

const Wrapper = styled.div`
  color: #fff;
`;

