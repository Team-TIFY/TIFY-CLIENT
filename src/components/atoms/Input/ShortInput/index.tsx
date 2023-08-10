import styled from '@emotion/styled';
import { TextareaHTMLAttributes, useRef, useState } from 'react';
import { theme } from '@styles/theme';
import { FlexBox } from "@components/layouts/FlexBox";
import { SearchIcon } from "@assets/icons/SearchIcon";


type InputVariant = 
| 'default'
| 'search'

type InputVariantType = {
  [key in InputVariant]: {
    isSearch: boolean,
  }
}

const INPUT_TYPE: InputVariantType = {
  default: {
    isSearch: false,
  },
  search: {
    isSearch: true,
  }
}

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  searchVariant: InputVariant;
  maxText?: number;
  explanation: string;
  width: number;
  placeholder: string;
  warning: string;
  error: boolean;
  onChange?: () => void;
}


export const ShortInput= (
  {
    searchVariant,
    maxText,
    explanation,
    width,
    placeholder,
    onChange,
    error,
    warning,
    ...props
  }: InputProps) => {
  
  const ref = useRef<HTMLTextAreaElement>(null);
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState("");


  const focusInput = () => {
    setFocus(prev => !prev);
  }

    const textHandler = (e: any) => {
      const inputText = e.target.value;
      setContent(inputText);
    }

    const cancelClick = () => {
      setContent("");
  }
  


  return (
    <FlexBox>
      <Wrapper>
        <InstText>{explanation}</InstText>
        <TextAreaWrapper width={width} error={error}>
          <SearchIcon variant={INPUT_TYPE[searchVariant].isSearch} />
          <StyledTextArea
              ref={ref}
              value={content}
              placeholder={placeholder}
              spellCheck="false"
              onChange={textHandler}
              maxLength={maxText}
              onFocus={focusInput}
              onBlur={focusInput}
              {...props}
            />
            <CancelBtn onClick={cancelClick}/>
        </TextAreaWrapper>
        {
          error ? <WarningText>{warning}</WarningText> : null //경고 문구
        }
      </Wrapper>      
    </FlexBox>

  );
};


const Wrapper = styled.div`
`

const InstText = styled.div`
  width: 280px;
  height: 20px;
  margin-bottom: 8px;
  ${theme.typo.Caption_12M};
  color: ${theme.palette.gray_200};
` 

const TextAreaWrapper = styled.div<{
  error: boolean;
  width: number;
}>`
    border-radius: 12px;
    padding: 14px;
    background: ${theme.palette.gray_900};
    width: ${({ width }) => `${width}px`};
    display: flex;
    align-items: center;
    border: ${({ error }) => error ? "2px solid" : "none"};
    border-color: ${({ error }) => error ? `${theme.palette.red_300}` : `${theme.palette.purple_300}`};

    &:focus-within {
      border: 2px solid;
      border-color: ${({ error }) => error ? `${theme.palette.red_300}` : `${theme.palette.purple_300}`};
    }
  `;
    

const StyledTextArea = styled.textarea`
    width: 254px;
    max-height: 20px;
    border: none;
    resize: none;
    background: transparent;
    padding: 0;
    margin-right: 12px;
    color: ${theme.palette.white};
    ${theme.typo.Body_14};
    overflow: hidden;
    outline: none;
  `;


  const WarningText = styled.div`
    width: 280px;
    height:20px;
    padding: 8px 14px;
    color:${theme.palette.red_500};
    ${theme.typo.Caption_12M};
  `

const CancelBtn = styled.button`
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1451_3860)'%3E%3Cpath d='M12 4L4 12' stroke='%23E4E4E5' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 4L12 12' stroke='%23E4E4E5' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1451_3860'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-size: cover;

  `