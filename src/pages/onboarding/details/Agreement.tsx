import React from "react";
import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";
import { Button } from "./../../../components/atoms/Button/index";
import { Text } from "../../../components/atoms/Text";
import { Vector } from "../../../assets/icons/Vector";

export function Agreement() {
  const [checkList, setCheckList] = useState<string[]>([]);
  const [goNext, setGoNext] = useState<boolean>(false);
  const [btnColor, setBtnColor] = useState<boolean>(false);

  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList(["age", "service", "handlePrivacy", "collectPrivacy", "marketing"])
      : setCheckList([]);
  }

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
    console.log(checkList);
  }

  useEffect(() => {
    if (
      checkList.includes("age") &&
      checkList.includes("service") &&
      checkList.includes("handlePrivacy") &&
      checkList.includes("collectPrivacy")
    ) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  });

  const gotoReg = () => {
    if (
      btnColor === true
    ) {
      setGoNext(true);
    } else {
      setGoNext(false);
    }
  };

  return (
    <>
      <TextArea>
        <TextWrap>
          <Text
            children="TIFY 이용약관에 동의해 주세요"
            typo={"SCD_Headline_20"}
            color={"gray_100"}
          />     
        </TextWrap>        
      </TextArea>
      <CheckDiv>
        <Checkbox
          children="약관 전체 동의"
          name="all"
          onChange={checkAll}
          checked={checkList.length === 5 ? true : false}
          border= {true}
          padding={16}
        />
        <Vector visible="hidden"
        />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="만 14세 이상"
          name="age"
          onChange={check}
          checked={checkList.includes("age") ? true : false}
        />
        <Vector visible="hidden"
        />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="서비스 이용약관"
          name="service"
          onChange={check}
          checked={checkList.includes("service") ? true : false}
        />
        <Vector
          linkUrl="9e75acf1487c481a9fe818754198b73a"
        />
      </CheckDiv>
      <CheckDiv>
      <Checkbox
        children="개인정보 처리방침"
        name="handlePrivacy"
        onChange={check}
        checked={checkList.includes("handlePrivacy") ? true : false}
        />
        <Vector
          linkUrl="9e75acf1487c481a9fe818754198b73a"
        />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="개인정보 수집 및 이용 동의서"
          name="collectPrivacy"
          onChange={check}
          checked={checkList.includes("collectPrivacy") ? true : false}
        />
        <Vector
          linkUrl="9e75acf1487c481a9fe818754198b73a"
        />
      </CheckDiv>
      <CheckDiv>
        <Checkbox
          children="마케팅 수신 동의(선택)"
          name="marketing"
          onChange={check}
          checked={checkList.includes("marketing") ? true : false}
        />
        <Vector
          linkUrl="9e75acf1487c481a9fe818754198b73a"
        />
      </CheckDiv>
      <BtnDiv>
        <Button
          variant="mediumRound" width={312} children="다음"
          onClick={gotoReg} disabled={!btnColor}
        />        
      </BtnDiv>
    </>
  )
}

const TextArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const TextWrap = styled.div`
  margin: 32px;
  width: 312px;
`

const CheckDiv = styled.label`
  display: flex;
  justify-content: center;
`

const BtnDiv = styled.div`
  margin-top: 228px;
  padding-bottom: 32px;
  text-align: center;
`