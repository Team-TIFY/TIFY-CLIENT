import styled from "@emotion/styled";
import { Avatar } from "@components/atoms/Avatar";
import { Spacing } from "@components/atoms/Spacing";
import { FlexBox } from "@components/layouts/FlexBox";
import { Text } from "@components/atoms/Text";
import { UserInfo } from "@libs/types/UserType";
import ThreeDots from "@assets/icons/ThreeDots";
import Svg from "@components/atoms/Svg";

export interface UserDetailProps {
  userData: UserInfo;
}

export const UserDetail = ({ userData }: UserDetailProps) => {
  return (
    <>
      <AvatarWrapper>
        <Avatar
          variant={"medium"}
          isVisible={"visible"}
        />
      </AvatarWrapper>
      <Spacing height={12} />
      <UserInfoWrapper>
        <FlexBox justify="space-between">
          <Text typo={"Headline_20"} color={"white"} children={userData?.userName} />
          <Svg children={<ThreeDots />} style={{ cursor: 'pointer' }} />
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