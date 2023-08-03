import styled from "@emotion/styled";
import { useState } from "react";
import { UserApi } from "@utils/apis/user/UserApi";
import { useRecoilValue } from "recoil";
import { authState } from "@libs/store/auth";
import { useQuery } from "@tanstack/react-query";
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
import { SelectedProps, SelectedTag } from "@libs/types/UserTypes";
import Dots from "@assets/icons/Dots";

const selectedProps: SelectedProps = [
  { id: 1, active: false, name: "메이크업", value: "MAKEUP" },
  { id: 2, active: false, name: "프레그런스", value: "PERFUME" },
  { id: 3, active: false, name: "의류", value: "CLOTHES" },
  { id: 4, active: false, name: "잡화", value: "FASHIONSTUFF" },
  { id: 5, active: false, name: "액세사리", value: "ACCESSORY" },
  { id: 6, active: false, name: "요리", value: "COOKING" },
  { id: 7, active: false, name: "운동", value: "SPORTS" },
  { id: 8, active: false, name: "여행", value: "TRIP" },
  { id: 9, active: false, name: "문화생활", value: "CULTURALLIFE" },
];

export const MyProfile = () => {
  const auth = useRecoilValue(authState);

  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([]);

  const { data: userData } = useQuery(["userProfile", auth.userId], () =>
    UserApi.GET_USER_INFO(auth.userId)
  );

  const { data: userTagData = [] } = useQuery(["userTag", auth.userId], () =>
    UserApi.GET_USER_TAG(auth.userId)
  );

  const getFilteredData = (selectedTags: SelectedTag[]) => {
    const promises = selectedTags.map((tag) =>
      UserApi.GET_FILTERED_USER_TAG(auth.userId, tag.value)
    );

    return Promise.all(promises);
  };

  const { data: filteredUserTagData = [] } = useQuery(
    ["filteredUserTag", selectedTags, auth.userId],
    () => getFilteredData(selectedTags),
    {
      enabled: selectedTags.length > 0,
    }
  );

  return (
    <>
      <AppBar variant={"backPush"} label={"@" + userData?.email} />
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
                <Text typo={"Headline_20"} color={"white"} children={userData?.userName} />
                <Dots />
              </FlexBox>
              <Text
                typo={"Mont_Caption_12M"}
                color={"gray_200"}
                children={userData?.birth + " | 바다에서 서핑 중 🏄‍♂️"}
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
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedProps={selectedProps}
            />
          </FilterWrapper>
          <Spacing height={20} />
          <CategoryWrapper>
            <FlexBox direction="column" gap={20}>
              {selectedTags.length > 0
                ? filteredUserTagData.map((tag, idx) => (
                    <Category
                      key={idx}
                      categoryName={selectedTags[idx].name}
                      children={tag.map((tagData) => (
                        <Tag
                          key={tagData.userFavorId}
                          variant={"main"}
                          color={"purple"}
                          children={tagData.smallCategory}
                        />
                      ))}
                    />
                  ))
                : userTagData.map((category) => (
                    <Category
                      key={category.userTagId}
                      categoryName={category.largeCategory}
                      children={category.favors.map((tag) => (
                        <Tag
                          key={tag.userFavorId}
                          variant={"main"}
                          color={"purple"}
                          children={tag.smallCategory}
                        />
                      ))}
                    />
                  ))}
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