import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import SmallRightChevron from "@assets/icons/SmallRightChevron";
import { Button } from "../Button";
import { Text } from "../Text";
import Svg from "../Svg";

type CategoryPropsType = {
  categoryName: string;
  children: React.ReactNode[];
  onPlusButtonClick?: () => void;
  onShowMorePreferencesClick?: () => void;
};

export const Category = ({
  categoryName,
  children,
  onPlusButtonClick,
  onShowMorePreferencesClick,
}: CategoryPropsType) => {
  return (
    <Wrapper>
      <Heading>
        <Text children={categoryName} typo={"Headline_16"} color={"white"} as={"div"} />
        <Button variant={"circle"} children={"+"} onClick={onPlusButtonClick} />
      </Heading>
      <TagWrapper>
        {children.map((child, index) => (
          <TagItem key={index}>{child}</TagItem>
        ))}
      </TagWrapper>
      <MorePreferencesContainer>
        <Text children={"취향 더보기"} typo={"Caption_12R"} color={"gray_300"} as={"div"} />
        <Svg children={<SmallRightChevron stroke={theme.palette.gray_300} />} onClick={onShowMorePreferencesClick} />
      </MorePreferencesContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 328px;
  border-radius: 16px;
  padding: 16px 18px;
  background-color: ${theme.palette.gray_800};
`;

const Heading = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const TagWrapper = styled.div`
  width: 100%;
  height: 76px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TagItem = styled.div``;

const MorePreferencesContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;