import './button.css';
import { ButtonHTMLAttributes } from 'react';
import { KeyOfTypo, theme } from '@styles/theme';
import styled from '@emotion/styled';

type ButtonVariant = 
| 'mediumRound'
| 'mediumSquare'
| 'smallRound'
| 'circle'

const BUTTON_COLOR_TYPE = {
  default: {
    'mediumRound': `${theme.palette.purple_500}`,
    'mediumSquare': `${theme.palette.gray_900}`,
    'smallRound' : `${theme.palette.background}`,
    'circle' : `${theme.palette.gray_900}`
  },
  disabled: {
    'mediumRound': `${theme.palette.gray_700}`,
    'mediumSquare': `${theme.palette.gray_900}`,
    'smallRound': `${theme.palette.background}`,
    'circle': `${theme.palette.gray_700}`,
  },
  hover: {
    'mediumRound': `${theme.palette.purple_600}`,
    'mediumSquare': `${theme.palette.gray_800}`,
    'smallRound': `${theme.palette.gray_800}`,
    'circle' : `${theme.palette.gray_900}`
  }
}

const TEXT_COLOR_TYPE = {
  default: {
    'mediumRound': `${theme.palette.white}`,
    'mediumSquare': `${theme.palette.gray_200}`,
    'smallRound' : `${theme.palette.gray_100}`,
    'circle' : `${theme.palette.gray_100}`
  },
  disabled: {
    'mediumRound': `${theme.palette.gray_500}`,
    'mediumSquare': `${theme.palette.gray_200}`,
    'smallRound': `${theme.palette.gray_100}`,
    'circle': `${theme.palette.gray_500}`,
  },
  hover: {
    'mediumRound': `${theme.palette.white}`,
    'mediumSquare': `${theme.palette.gray_100}`,
    'smallRound': `${theme.palette.gray_100}`,
    'circle' : `${theme.palette.gray_100}`
  }
}

type ButtonShapeType = {
  [key in ButtonVariant]:{
    radius: number;
    typo: KeyOfTypo;
    width: number;
    height: number;
  }
}

const BUTTON_SHAPE_TYPE: ButtonShapeType = {
  mediumRound: {
    radius: 24,
    typo :'Subhead_16',
    width : 126,
    height: 48
  },
  mediumSquare: {
    radius: 12,
    typo : 'Body_14',
    width: 158,
    height: 40
  },
  smallRound: {
    radius: 18,
    typo:'Subhead_14',
    width : 156,
    height: 20
  },
  circle: {
    radius: 50,
    typo: 'Subhead_16',
    width: 32,
    height: 32
  }
}

/**
 * @param variant 버튼의 종류 : 'circle' 
 * @param fullWidth div의 길이를 꽉 채울 것인지 확인 : true | false (optional)
 * @param width 가로 길이를 명시적으로 작성 (단위 px) (optional)
 * @param isLoading 버튼이 로딩 중인지에 대한 state 설정 : true | false (optional)
 * @param onClick 버튼을 클릭할 때 발생하는 event 명시 (optional)
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant: ButtonVariant;
  fullWidth?: boolean;
  width?: number;
  isLoading?: boolean;
  onClick?: () => void;
}
type Props = Partial<ButtonProps>;

export const Button = ({
  children,
  variant = 'mediumRound',
  fullWidth=true,
  width,
  isLoading,
  ...props
}: Props) => {
  return (
    <StyledButton 
      width = { width } 
      variant = {variant} 
      fullWidth = {fullWidth}
      {...props}
    >
      {isLoading ? (
        <p>로딩중입니다</p>
      ) : (
        <>
        {children}
        </>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  variant : ButtonVariant;
  width?: number;
  fullWidth?: boolean;  
}>`
  border: none;
  width: ${({ width, fullWidth }) => fullWidth ? '100%' : `${width}px`};
  height: ${({ variant }) => `${BUTTON_SHAPE_TYPE[variant].height}px`};
  background-color: ${({ variant }) => `${BUTTON_COLOR_TYPE.default[variant]}`};
  border-radius: ${({ variant }) => `${BUTTON_SHAPE_TYPE[variant].radius}px`};
  ${({ variant }) => `${BUTTON_SHAPE_TYPE[variant].typo}`};
  color: ${({ variant }) => `${TEXT_COLOR_TYPE.default[variant]}`};

  &:hover {
    background-color: ${({ variant }) => `${BUTTON_COLOR_TYPE.hover[variant]}`};
    color: ${({variant}) => `${TEXT_COLOR_TYPE.hover[variant]}`}
  }

  &:disabled {
    background-color: ${({ variant }) => `${BUTTON_COLOR_TYPE.disabled[variant]}`};
    color: ${({variant}) => `${TEXT_COLOR_TYPE.disabled[variant]}`}
  }
`