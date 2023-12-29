import styled from '@emotion/styled'

import { CategoryHeaderPropsType } from '@models/components/atoms/Category'
import Gift from '@assets/icons/Gift'
import Plus from '@assets/icons/Plus'
import { RoundButton } from '../RoundButton'
import { Text } from '../Text'
import Svg from '../Svg'

const CategoryHeader = ({
  categoryName,
  isFriend,
  allCategoryAnswered,
  onPlusButtonClick,
  onPresentButtonClick,
}: CategoryHeaderPropsType) => {
  const renderIcon = () => {
    if (isFriend) {
      return <Svg children={<Gift />} onClick={onPresentButtonClick} />
    } else {
      if (!allCategoryAnswered) {
        return <Svg children={<Plus />} onClick={onPlusButtonClick} />
      } else {
        return null
      }
    }
  }

  return (
    <Heading>
      <Text children={categoryName} typo="Headline_16" color="white" as="div" />
      {(isFriend || !allCategoryAnswered) && (
        <RoundButton
          variant="circle"
          children={
            <Svg
              children={renderIcon()}
              style={{ display: 'flex', alignItems: 'center' }}
              height="fit-content"
            />
          }
        />
      )}
    </Heading>
  )
}

export default CategoryHeader

const Heading = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`
