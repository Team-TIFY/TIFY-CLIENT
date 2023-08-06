import styled from "@emotion/styled";

interface ProfileImagePropsInterface {
  isTagSelected: boolean;
}

export const ProfileImage = ({ isTagSelected }: ProfileImagePropsInterface) => {
  return (
    <ImageWrapper isTagSelected={isTagSelected}>
      
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div<{ isTagSelected: boolean }>`
  border: 1px solid red;
  width: 100%;
  height: ${({ isTagSelected }) => isTagSelected ? '86px' : '336px'};
`;