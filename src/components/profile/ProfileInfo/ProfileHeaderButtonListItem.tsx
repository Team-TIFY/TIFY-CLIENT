import styled from '@emotion/styled'

import { ProfileHeaderButtonListItemPropsType } from '@models/components/Profile/profile'
import SquareButton from '@components/atoms/SquareButton'
import { FlexBox } from '@components/layouts/FlexBox'

const ProfileHeaderButtonListItem = ({
  buttons,
}: ProfileHeaderButtonListItemPropsType) => {
  return (
    <ButtonWrapper>
      <FlexBox justify="space-between" gap={12}>
        {buttons.map(({ text, onClick }, index) => (
          <SquareButton
            key={index}
            variant="mediumSquare"
            subVariant="default"
            fullWidth={true}
            children={text}
            onClick={onClick}
          />
        ))}
      </FlexBox>
    </ButtonWrapper>
  )
}

export default ProfileHeaderButtonListItem

const ButtonWrapper = styled.div``
