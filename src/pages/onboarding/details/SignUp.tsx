import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue} from "recoil";
import { isBtnColorState, onboardingPageState, onboardingState } from "@libs/store/onboard";
import { StartMent } from "./signup/StartMent";
import { Button } from "@components/atoms/Button";
import { Spacing } from "@components/atoms/Spacing";
import { Name } from "./signup/Name";
import { UserId } from "./signup/UserId";
import { Birth } from "./signup/Birth";
import { Gender } from "./signup/Gender";

export function SignUp() {
  const [infoPage, setInfoPage] = useRecoilState(onboardingPageState);
  const [page, setPage] = useState<string>("name");
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState);

    useEffect(() => {
      if (infoPage.info.name) {
        setPage("userId");
      } if (infoPage.info.userId) {
        setPage("birth");
      } if (infoPage.info.birth) {
        setPage("gender");
      } if (infoPage.info.gender) {
        setInfoPage({
          ...infoPage,
          interestStart: true,
        })
      }
    }, [infoPage.info]);

    const gotoReg = (content: string) => {
    if (btnColor === true) {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          [content]: true,
        }
      });
    } else {
      setInfoPage({ ...infoPage });
      }
  }

  const gotoBack = (content: string) => {
    if (content == "gender") {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          [content]: false,
        }
      });
      setPage("gender");
    }
    else if (content == "birth") {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          birth: false,
          gender: false,
        }
      });
      setPage("birth");
    }
    else if (content == "userId") {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          birth: false,
          gender: false,
          userId: false,
        }
      });
      setPage("userId");
    }
    else if (content == "name") {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          birth: false,
          gender: false,
          userId: false,
          name: false,
        }
      });
    }
    setPage("name");
  }
  

  return (
    <>
      <StartMent/>
      <StepDiv step={infoPage.info.birth} onClick={()=>gotoBack("gender")}>
        <Gender />
        <Spacing height={48}/>
      </StepDiv>
      <StepDiv step={infoPage.info.userId} onClick={()=>gotoBack("birth")}>
        <Birth />
        <Spacing height={48}/>
      </StepDiv>
      <StepDiv step={infoPage.info.name} onClick={()=>gotoBack("userId")}>
        <UserId />     
        <Spacing height={48}/>
      </StepDiv>
      <div onClick={() => gotoBack("name")}>
        <Name />        
      </div>
      <BtnDiv>
        <Button
          variant="mediumRound" width={312} children="다음"
          onClick={
            () => {
              gotoReg(page)
              setBtnColor(() => false)
            }
          } disabled={!btnColor}
        />
      </BtnDiv>
    </>
  )
}


const StepDiv = styled.div<{
  step: boolean;
}>`
 display: ${({ step }) => step ? "block" : "none"};
`

const BtnDiv = styled.div`
  margin-top: 228px;
  padding-bottom: 32px;
  text-align: center;
`