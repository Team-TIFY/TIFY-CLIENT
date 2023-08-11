import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { onboardingPageState } from "@libs/store/onboard";
import { Text } from "@components/atoms/Text";
import { FlexBox } from "./../../../../components/layouts/FlexBox";
import { Step1 } from "@assets/icons/SignupStep/1";
import { Step2 } from "./../../../../assets/icons/SignupStep/2";
import { Step3 } from "@assets/icons/SignupStep/3";
import { Step4 } from "@assets/icons/SignupStep/4";


export function StartMent() {
  
  const infoPage = useRecoilValue(onboardingPageState);

  return (
    <>
      <FlexBox>
        <TextWrap>
          <Text
            children="TIFY를 시작해 볼까요?"
            typo={"SCD_Headline_20"}
            color={"gray_100"}
          />
        </TextWrap>
      </FlexBox>
      <FlexBox>
        <SmallText>
          {
            infoPage.info.name ? (
              infoPage.info.userId ? (
                infoPage.info.birth ? 
                  <Step4/> : <Step3/>
              ) : <Step2/>
            ) : <Step1/>
          }
          <SmallWrap>
            <Text
              children={
                infoPage.info.name ? (
                  infoPage.info.userId ? (
                    infoPage.info.birth ?
                      "성별을 알려주세요" : "생년월일을 알려주세요"
                  ) : "사용자 ID를 알려주세요"
                ) : "이름을 알려주세요"}
              typo={"Body_16"}
              color={"gray_100"}
            />
          </SmallWrap>
        </SmallText>
      </FlexBox>
    </>
  )
}

const TextWrap = styled.div`
  margin: 32px 24px;
  width: 312px;
`

const SmallText = styled.div`
  width: 312px;
  display: flex;
  align-items: center;
`

const SmallWrap = styled.div`
  width: 248px;
  margin: 32px 8px;
`