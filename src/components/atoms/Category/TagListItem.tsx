import styled from '@emotion/styled'

import { TagListItemPropsType } from '@models/components/atoms/Category'

const TagListItem = ({ children }: TagListItemPropsType) => {
  return (
    <TagWrapper>
      {children.map(
        (child, index) => child && <TagItem key={index}>{child}</TagItem>,
      )}
    </TagWrapper>
  )
}

export default TagListItem

const TagWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const TagItem = styled.div``
