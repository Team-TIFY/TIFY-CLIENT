import styled from "@emotion/styled";
import Dots from "@assets/icons/Dots";
import { Avatar } from "@components/atoms/Avatar";
import { Spacing } from "@components/atoms/Spacing";
import { FlexBox } from "@components/layouts/FlexBox";
import { Text } from "@components/atoms/Text";
import { UserInfo } from "@libs/types/UserTypes";

export interface UserDetailProps {
  userData: UserInfo;
}

export const UserDetail = ({ userData }: UserDetailProps) => {
  return (
    <>
      <AvatarWrapper>
        <Avatar
          variant={"medium"}
          color={"purple"}
          imageUrl={"monkey"}
          isVisible={"visible"}
        />
      </AvatarWrapper>
      <Spacing height={12} />
      <UserInfoWrapper>
        <FlexBox justify="space-between">
          <Text typo={"Headline_20"} color={"white"} children={userData?.userName} />
          <Dots />
        </FlexBox>
        <Text
          typo={"Mont_Caption_12M"}
          color={"gray_200"}
          children={userData?.birth + " | 바다에서 서핑 중 🏄‍♂️"}
        />
      </UserInfoWrapper>
    </>
  );
};

const AvatarWrapper = styled.div``;

const UserInfoWrapper = styled.div`
  height: 52px;
`;