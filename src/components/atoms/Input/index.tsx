import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { theme } from '@styles/theme';


type InputVariant = 
| 'withInst'
| 'default'

type InputVariantType = {
  [key in InputVariant]: {
    display: string,
  }
}

const INPUT_TYPE: InputVariantType = {
  withInst: {
    display: 'block'
  },
  default: {
    display: 'none'
  }
}

interface InputProps extends React.ComponentProps<'div'>{
  variant: InputVariant;
}
type Props = Partial<InputProps>;


export const TextArea = (
  { variant,
    children
  }: Props) => {
  const [line, setLine] = useState("");
  const [count, setCount] = useState(true); //2줄 넘지 않으면 true
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => { //줄 바뀌면 자동 높이 조절
    ref.current && (ref.current.style.height = '0px');
    ref.current && (ref.current.style.height = ref.current.scrollHeight + 'px');
  };

  const countLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => { //입력 줄 수 제한
    const textValue = e.target.value;
    const textHeight = ref.current && (ref.current.scrollHeight);

    var maxNum = 0;
      for (var i = 0; (i < textValue.length); i++){
        maxNum++;
        }

    if (textHeight && (textHeight == 40)) {
      setLine(textValue.substring(0, maxNum)); //2줄 제한(넘으면 입력 x)
      setCount(true);
    } else if (textHeight && textHeight < 40) {
      setLine(textValue);
      setCount(true);
    } else if (textHeight && (textHeight > 40 )) {
      setCount(false);
    }
  };

  return (
    <Wrapper>
      <InstText variant={variant!}>{children}</InstText>
      <TextAreaWrapper count={count}>
      <StyledTextArea
        rows={1}
        value={line}
        ref={ref}
        placeholder="답변을 입력해 주세요."
        spellCheck="false"
        onInput={handleResizeHeight}
        onChange={countLength}
      />
      </TextAreaWrapper>
      {
        count ? null : <WarningText>2줄 이내로 부탁해요!</WarningText> //2줄 초과 입력 시 경고 문구
      }
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InstText = styled.div <{
  variant: InputVariant;
}>`
  display: ${({variant})=>INPUT_TYPE[variant].display};
  text-align: center;
  width: 280px;
  height: 20px;
  margin-bottom: 8px;
  ${theme.typo.Caption_12};
  color: ${theme.palette.gray_200};
` 

const TextAreaWrapper = styled.div<{ count: boolean }>`
    border-radius: 12px;
    padding: 14px;
    background: ${theme.palette.gray_900};
    width: 284px;

    &:focus-within {
      border: 2px solid;
      border-color: ${(props) => props.count ? `${theme.palette.purple_300}` : `${theme.palette.red_300}`}};
    }
  `;
    

  const StyledTextArea = styled.textarea`
    width: 100%;
    max-height: 40px;
    border: none;
    resize: none;
    background: transparent;
    padding: 0;
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
    ${theme.typo.Caption_12};
  `