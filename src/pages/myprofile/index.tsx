import styled from "@emotion/styled";
import dotsIconImgUrl from "../../assets/icons/dots.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserApi } from "@utils/apis/user/UserApi";
import { useRecoilState } from "recoil";
import { authState } from "@libs/store/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Text } from "@components/atoms/Text";
import { AppBar } from "@components/atoms/AppBar";
import { Spacing } from "@components/atoms/Spacing";
import { Padding } from "@components/layouts/Padding";
import { Avatar } from "@components/atoms/Avatar";
import { Button } from "@components/atoms/Button";
import { Category } from "@components/atoms/Category";
import { Filter } from "@components/atoms/Filter";
import { Tag } from "@components/atoms/Tag";
import { FlexBox } from "@components/layouts/FlexBox";

export const MyProfile = () => {
  const [auth, setAuth] = useRecoilState(authState);

  console.log(auth.userId);

  const { data, isSuccess } = useQuery(['userProfile', auth.userId], () =>
    UserApi.GET_USER_INFO(auth.userId),
  );

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  });

  return (
    <>
      <AppBar variant={"backPush"} label={"@example_kim"} />
      <ImageWrapper />
      <Spacing />
      <Padding size={[0, 16]}>
        <ProfileWrapper>
          <ProfileHeader>
            <AvatarWrapper>
              <Avatar
                variant={"medium"}
                color={"purple"}
                imageUrl={"monkey"}
                isVisible={"visible"}
              />
            </AvatarWrapper>
            <Spacing height={12} />
            <UserInfo>
              <FlexBox justify="space-between">
                <Text typo={"Headline_20"} color={'white'} children={"김예시"} />
                <img src={dotsIconImgUrl} />
              </FlexBox>
              <Text
                typo={"Mont_Caption_12M"}
                color={"gray_200"}
                children={"August 21 | 바다에서 서핑 중 🏄‍♂️"}
              />
            </UserInfo>
            <Spacing height={20} />
            <ButtonWrapper>
              <FlexBox justify="space-between">
                <Button variant={"mediumSquare"} children={"지난 데일리"} />
                <Button variant={"mediumSquare"} children={"새로운 관심사 답변"} />
              </FlexBox>
            </ButtonWrapper>
          </ProfileHeader>
          <Spacing height={32} />
          <FilterWrapper>
            <Filter
              selectedProps={[
                { id: 1, active: false, value: "메이크업" },
                { id: 2, active: false, value: "프레그런스" },
                { id: 3, active: false, value: "의류" },
                { id: 4, active: false, value: "잡화" },
                { id: 5, active: false, value: "액세사리" },
                { id: 6, active: false, value: "요리" },
                { id: 7, active: false, value: "운동" },
                { id: 8, active: false, value: "여행" },
                { id: 9, active: false, value: "문화생활" },
              ]}
            />
          </FilterWrapper>
          <Spacing height={20} />
          <CategoryWrapper>
            <FlexBox direction="column" gap={20}>
              <Category
                categoryName="메이크업"
                children={[
                  <Tag variant={"main"} color={"purple"} children={"여름쿨톤"} />,
                  <Tag variant={"main"} color={"pink"} children={"글로시 립"} />,
                  <Tag variant={"dark"} color={"purple"} children={"페리페라"} />,
                  <Tag variant={"dark"} color={"pink"} children={"페리페라"} />,
                  <Tag variant={"main"} color={"purple"} children={"페리페라"} />,
                  <Tag variant={"dark"} color={"purple"} children={"페리페라"} />,
                ]}
              />
              <Category
                categoryName="의류"
                children={[
                  <Tag variant={"main"} color={"purple"} children={"여름쿨톤"} />,
                  <Tag variant={"main"} color={"pink"} children={"글로시 립"} />,
                  <Tag variant={"dark"} color={"purple"} children={"페리페라"} />,
                  <Tag variant={"dark"} color={"pink"} children={"페리페라"} />,
                  <Tag variant={"main"} color={"purple"} children={"페리페라"} />,
                  <Tag variant={"dark"} color={"purple"} children={"페리페라"} />,
                ]}
              />
            </FlexBox>
            <Spacing height={32} />
          </CategoryWrapper>
        </ProfileWrapper>
      </Padding>
    </>
  );
};

const ImageWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 336px;
`;

const ProfileWrapper = styled.div``;

const ProfileHeader = styled.div``;

const AvatarWrapper = styled.div``;

const UserInfo = styled.div`
  height: 52px;
`;

const FilterWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ButtonWrapper = styled.div``;

const CategoryWrapper = styled.div``;