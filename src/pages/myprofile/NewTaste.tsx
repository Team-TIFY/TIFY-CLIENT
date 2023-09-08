import { Spacing } from "@components/atoms/Spacing";
import { Text } from "@components/atoms/Text";
import { Padding } from "@components/layouts/Padding";
import NewTasteCategory from "@components/mypage/NewTasteCategory";
import styled from "@emotion/styled";
import { authState } from "@libs/store/auth";
import { UserNewTasteCategory } from "@libs/types/UserType";
import { theme } from "@styles/theme";
import { useQuery } from "@tanstack/react-query";
import { UserApi } from "@utils/apis/user/UserApi";
import { useRecoilValue } from "recoil";

const NewTaste = () => {
  const auth = useRecoilValue(authState);

  const { data: isAnsweredQuestion } = useQuery(["newTasteCategory", auth.userId], () =>
    UserApi.GET_ISANSWERED_QUESTION()
  )

  return (
    <>
      <Padding>
        <Spacing height={32} />
        <TextWrapper>
          취향을 찾고 싶은 <br />
          카테고리를 골라주세요
        </TextWrapper>
        <Spacing height={48} />
        <Text
          typo={"Headline_16"}
          as={"div"}
          color={"white"}
        >
          뷰티
        </Text>
        <Spacing height={20} />
        <NewTasteCategory
          subCategoryList={isAnsweredQuestion?.slice(0, 2) as UserNewTasteCategory[]}
        />
        <Spacing height={24} />
        <Text
          typo={"Headline_16"}
          as={"div"}
          color={"white"}
        >
          패션
        </Text>
        <Spacing height={20} />
        <NewTasteCategory
          subCategoryList={isAnsweredQuestion?.slice(2, 6) as UserNewTasteCategory[]}
        />
        <Spacing height={24} />
        <Text
          typo={"Headline_16"}
          as={"div"}
          color={"white"}
        >
          취미
        </Text>
        <Spacing height={20} />
        <NewTasteCategory
          subCategoryList={isAnsweredQuestion?.slice(6, 10) as UserNewTasteCategory[]}
        />
      </Padding>
    </>
  );
};

export default NewTaste;

const TextWrapper = styled.div`
  ${theme.typo.SCD_Headline_20};
  color: ${theme.palette.gray_100};
`;
