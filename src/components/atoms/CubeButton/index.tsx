import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import Svg from "../Svg";
import { Text } from "../Text";

export type cubeButtonVariant = "unSelected" | "selected" | "disabled";

interface CubeButtonProps {
  variant: cubeButtonVariant;
  img: React.ReactNode;
  text: string;
  onClick?: () => void
}

const CubeButton = ({ variant, img, text, onClick }: CubeButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      <TextWrapper>
        <Svg children={img} width={40} height={40} />
        <Text
          typo="Caption_12M"
          as="div"
          color={
            variant === "selected"
              ? "gray_800"
              : variant === "unSelected"
              ? "gray_100"
              : "gray_700"
          }
        >
          {text}
        </Text>
      </TextWrapper>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: cubeButtonVariant }>`
  width: 96px;
  height: 96px;
  background-color: ${({ variant }) =>
    variant === "selected"
      ? theme.palette.white
      : variant === "disabled"
      ? theme.palette.gray_900
      : theme.palette.gray_800};
  border-radius: 6px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  width: 80px;
  height: 64px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default CubeButton;