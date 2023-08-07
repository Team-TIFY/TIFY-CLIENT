import styled from "@emotion/styled";
import { theme } from "@styles/theme";

import { Text } from "../Text";
import { Avatar } from "../Avatar";

import openEyeIconImgUrl from "../../../assets/icons/openEye.svg";
import closeEyeIconImgUrl from "../../../assets/icons/closeEye.svg";
import orderingIconImgUrl from "../../../assets/icons/ordering.svg";

type FriendsListVariant = 'visible' | 'invisible';

interface FriendsListProps {
  variant?: FriendsListVariant;
  name: string;
  nickName: string;
  avatarImgUrl: "kitty" | "monkey";
  onClick?: () => void;
}

export const FriendsList = ({ variant = 'visible', name, nickName, avatarImgUrl, onClick }: FriendsListProps) => {
  return (
    <Wrapper variant={variant}>
      <Avatar variant="small" color="purple" imageUrl={`${avatarImgUrl}`} isVisible={`${variant}`} />
      <NameWrapper>
        {variant === 'visible' ? <Text children={name} typo='Subhead_16' /> : <Text children={name} typo='Subhead_16' color='gray_400' />}
        <Text children={'@' + nickName} typo='Caption_12M' color='gray_300' />
      </NameWrapper>
      <IconWrapper>
        {variant === 'visible' ? <img src={openEyeIconImgUrl} /> : <img src={closeEyeIconImgUrl} />}
        <img src={orderingIconImgUrl} onClick={onClick} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ variant: FriendsListVariant }>`
  width: 312px;
  height: 48px;
  background-color: ${theme.palette.background};
  display: flex;
`;

const NameWrapper = styled.div`
  width: 132px;
  margin-left: 16px;
  margin-right: 52px;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 64px;
  height: 24px;
  margin: auto 0;
  gap: 16px;
  justify-content: space-between;
`;