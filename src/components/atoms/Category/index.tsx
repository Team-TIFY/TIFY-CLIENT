import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { CategoryPropsType } from '@models/components/atoms/Category'
import CategoryHeader from './CategoryHeader'
import TagListItem from './TagListItem'

/**
 * @param categoryName 카테고리명을 나타냄
 * @param isFriend 친구 프로필인지 내 프로필인지 여부를 나타냄
 * @param children 보여줄 태그 컴포넌트 배열을 나타냄
 * @param allCategoryAnswered + 아이콘을 보여줄지 말지를 나타냄 (모든 detailCategory를 다 답변했는지 여부를 나타냄)
 * @param onPlusButtonClick + / 선물 버튼 클릭 시 발생하는 이벤트를 넘겨주는 함수임
 */

export const Category = ({
  categoryName,
  isFriend = false,
  children,
  allCategoryAnswered = false,
  onPlusButtonClick,
  onPresentButtonClick,
}: CategoryPropsType) => {
  return (
    <Wrapper>
      <CategoryHeader
        categoryName={categoryName}
        isFriend={isFriend}
        allCategoryAnswered={allCategoryAnswered}
        onPlusButtonClick={onPlusButtonClick}
        onPresentButtonClick={onPresentButtonClick}
      />
      <TagListItem children={children} />
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
