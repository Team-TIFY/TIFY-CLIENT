import { Spacing } from "@components/atoms/Spacing";
import { Text } from "@components/atoms/Text";
import { useRecoilValue } from "recoil";
import { userState } from "@libs/store/user";
import OnBoardGift from "@assets/image/OnBoardGift";
import styled from "@emotion/styled";
import { Button } from "@components/atoms/Button";
import { useNavigate } from "react-router-dom";

export function HalfSuccess() {

  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const goToNext = () => {
    navigate("/onboarding/after");
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
        <BtnDiv>
          <Button
            variant="mediumRound" width={312} children="시작"
            onClick={goToNext}
          />
        </BtnDiv>
      </ImgWrapper>
      <Spacing height={32}/>
    </>
  )
}

const TextDiv = styled.div`
  width:100%;
  padding: 0 24px 0 24px;
`

const ImgWrapper = styled.div`
  margin-top: 79px;
`

const BtnDiv = styled.div`
  margin-top: 228px;
  text-align: center;
`