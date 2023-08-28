import styled from "@emotion/styled";
import { Button } from "@components/atoms/Button";
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
          <Button variant={"mediumSquare"} children={"지난 데일리"} />
          <Button variant={"mediumSquare"} children={"새로운 관심사 답변"} />
        </FlexBox>
      </ButtonWrapper>
    </ProfileHeaderWrapper>
  );
};

const ProfileHeaderWrapper = styled.div``;

const ButtonWrapper = styled.div``;