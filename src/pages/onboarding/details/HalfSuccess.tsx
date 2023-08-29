import { Spacing } from "@components/atoms/Spacing";
import { Text } from "@components/atoms/Text";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@libs/store/user";
import OnBoardGift from "@assets/image/OnBoardGift";
import styled from "@emotion/styled";
import { Button } from "@components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { onboardingPageState } from "@libs/store/onboard";

export function HalfSuccess() {

  const user = useRecoilValue(userState);
    const [goNext, setGoNext] = useRecoilState(onboardingPageState);

  const goToNext = () => {
    setGoNext({ ...goNext, onboardStatus: true });
    console.log(goNext);
  }

  return (
    <>
      <Spacing height={32} />
      <TextDiv>
        <Text
          typo={"SCD_Headline_24"}
          color={'gray_100'}
        > {user.userName}님 안녕하세요!<br /> 나의 취향 프로필을 꾸며볼까요?
        </Text>        
      </TextDiv>
      <Spacing height={48} />
      <ImgWrapper>
        <OnBoardGift />
      </ImgWrapper>
      <BottomSticker>
        <Button
          variant="mediumRound" width={312} children="시작"
          onClick={goToNext}
        />
      </BottomSticker>
    </>
  )
}

const TextDiv = styled.div`
  width:100%;
  padding: 0 24px 0 24px;
`

const ImgWrapper = styled.div`
`

const BottomSticker = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`