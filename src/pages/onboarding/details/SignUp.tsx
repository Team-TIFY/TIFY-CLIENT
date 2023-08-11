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
  const info = useRecoilValue(onboardingState);
  const [page, setPage] = useState<string>("name");
  const btnColor = useRecoilValue(isBtnColorState);

    useEffect(() => {
      if (infoPage.info.name) {
        setPage("userId");
      } else if (infoPage.info.userId) {
        setPage("birth");
      } else if (infoPage.info.birth) {
        setPage("gender");
      }
    }, []);

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

  // const goBack = (content: string) => {
  //   if (content=="birth")
  // }


  return (
    <>
      <StartMent/>
      <StepDiv step={infoPage.info.birth}>
        <Gender />
        <Spacing height={48}/>
      </StepDiv>
      <StepDiv step={infoPage.info.userId}>
        <Birth />
        <Spacing height={48}/>
      </StepDiv>
      <StepDiv step={infoPage.info.name}>
        <UserId />     
        <Spacing height={48}/>
      </StepDiv>
      <Name />
      <BtnDiv>
        <Button
          variant="mediumRound" width={312} children="다음"
          onClick={()=>gotoReg(page)} disabled={!btnColor}
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