import { ShortInput } from "@components/atoms/Input/ShortInput";
import styled from '@emotion/styled';
import { isBtnColorState } from "@libs/store/onboard";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";

export function UserId() {

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState);

  const handleName = (e: ChangeEvent<HTMLTextAreaElement>) => {

    const regex = /^[a-zA-Z0-9.-_-\n\r]+$/; //정규식

    if (!regex.test(e.target.value) && e.target.value.length > 0) {
      setError(true);
      setErrorMsg("알파벳 (a-z, A-Z), 숫자, 밑줄 (-, _) 및 마침표만 사용해 주세요.");
    } else if (regex.test(e.target.value) && e.target.value.length >= 15) {
      setError(true);
      setErrorMsg("15글자 이내로 부탁해요!");
    } else {
      setError(false);
      setErrorMsg("");
    }

    if (e.target.value.length > 0
      && e.target.value.length < 15
      && regex.test(e.target.value)) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }


  return (
    <>
      <ShortInput
        variant="idInput"
        maxText={15}
        explanation="사용자 ID"
        width={312}
        placeholder="ID를 입력해주세요"
        error={error}
        warning={errorMsg}
        onChange={handleName}
        content="id"
      />
    </>
    )
}