import styled from "@emotion/styled";
import { RoundButton } from "@components/atoms/RoundButton";
import { Spacing } from "@components/atoms/Spacing";
import { FlexBox } from "@components/layouts/FlexBox";
import { UserInfo } from "@libs/types/UserTypes";
import { UserDetail } from "./UserDetail";

interface ProfileHeaderProps {
  userData: UserInfo;
}

export const ProfileHeader = ({ userData }: ProfileHeaderProps) => {
  return (
    <ProfileHeaderWrapper>
      <UserDetail userData={userData} />
      <Spacing height={20} />
      <ButtonWrapper>
        <FlexBox justify="space-between">
          <RoundButton variant={"mediumSquare"} children={"지난 데일리"} />
          <RoundButton variant={"mediumSquare"} children={"새로운 관심사 답변"} />
        </FlexBox>
      </ButtonWrapper>
    </ProfileHeaderWrapper>
  );
};

const ProfileHeaderWrapper = styled.div``;

const ButtonWrapper = styled.div``;