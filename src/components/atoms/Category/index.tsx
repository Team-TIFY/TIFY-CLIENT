import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { RoundButton } from '../RoundButton'
import { Text } from '../Text'
import Svg from '../Svg'
import Plus from '@assets/icons/Plus'
import Gift from '@assets/icons/Gift'

/**
 * @param categoryName 카테고리명을 나타냄
 * @param isFriend 친구 프로필인지 내 프로필인지 여부를 나타냄
 * @param children 보여줄 태그 컴포넌트 배열을 나타냄
 * @param onButtonClick + / 선물 버튼 클릭 시 발생하는 이벤트를 넘겨주는 함수임
 * @param onShowMorePreferencesClick 취향 더보기 버튼 클릭 시 발생하는 이벤트를 넘겨주는 함수임
 */
type CategoryPropsType = {
  categoryName: string
  isFriend: boolean
  children: React.ReactNode[]
  onButtonClick?: () => void
}

export const Category = ({
  categoryName,
  isFriend = false,
  children,
  onButtonClick,
}: CategoryPropsType) => {
  return (
    <Wrapper>
      <Heading>
        <Text
          children={categoryName}
          typo="Headline_16"
          color="white"
          as="div"
        />
        <RoundButton
          variant="circle"
          children={
            <Svg
              children={isFriend ? <Gift /> : <Plus />}
              style={{ display: 'flex', alignItems: 'center' }}
              height="fit-content"
            />
          }
          onClick={onButtonClick}
        />
      </Heading>
      <TagWrapper>
        {children.map((child, index) => (
          <TagItem key={index}>{child}</TagItem>
        ))}
      </TagWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 328px;
  height: fit-content;
  border-radius: 16px;
  padding: 16px 18px 20px 18px;
  background-color: ${theme.palette.gray_800};
`

const Heading = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

const TagWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const TagItem = styled.div``
