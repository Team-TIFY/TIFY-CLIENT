import styled from "@emotion/styled";
import { useState } from "react";
import { UserApi } from "@utils/apis/user/UserApi";
import { useRecoilValue } from "recoil";
import { authState } from "@libs/store/auth";
import { useQuery } from "@tanstack/react-query";
import { Spacing } from "@components/atoms/Spacing";
import { Padding } from "@components/layouts/Padding";
import { Filter } from "@components/atoms/Filter";
import { SelectedProps, SelectedTag, UserInfo } from "@libs/types/UserType";
import { ProfileImage } from "@components/mypage/ProfileImage";
import { UserTagData } from "@components/mypage/UserTagData";
import { ProfileHeader } from "@components/mypage/ProfileHeader";

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

const MyProfile = () => {
  const auth = useRecoilValue(authState);

  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([]);

  const { data: userData = {} as UserInfo } = useQuery(["userProfile", auth.userId], () =>
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
      <ProfileImage />
      <Spacing />
      <Padding size={[0, 16]}>
        <ProfileWrapper>
          <ProfileHeader userData={userData} />
          <Spacing height={32} />
          <FilterWrapper>
            <Filter
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedProps={selectedProps}
            />
          </FilterWrapper>
          <Spacing height={20} />
          <UserTagData
            selectedTags={selectedTags}
            filteredUserTagData={filteredUserTagData}
            userTagData={userTagData}
          />
        </ProfileWrapper>
      </Padding>
    </>
  );
};

export default MyProfile

const ProfileWrapper = styled.div``;

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
