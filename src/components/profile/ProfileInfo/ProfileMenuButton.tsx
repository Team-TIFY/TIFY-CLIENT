import styled from '@emotion/styled'

import useProfileMenuButtonsData from '@libs/hooks/useProfileMenuButtonsData'
import {
  ProfileButtonVariantType,
  ProfileMenuButtonPropsType,
} from '@models/components/Profile/profile'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import SquareButton from '@components/atoms/SquareButton'

const ProfileMenuButton = <T extends ProfileButtonVariantType>({
  type,
  friendUserId,
  friendImageUrl,
  friendId,
}: ProfileMenuButtonPropsType<T>) => {
  const buttonData = useProfileMenuButtonsData(type, friendId)

  const getWithProfileChildrenText = () => {
    if (type === 'block' || type === 'cancelBlock') {
      return `@${friendUserId} 님을`
    } else {
      return `원하는 경우 @${friendUserId} 님께`
    }
  }

  const getWithProfileXlargeChildrenText = () => {
    if (type === 'block') {
      return `정말 차단하시겠습니까?`
    } else if (type === 'cancelBlock') {
      return '차단 해제하시겠습니까?'
    } else {
      return '친구를 다시 요청할 수 있습니다.'
    }
  }

  const renderMenuButtons = () => {
    if (type === 'report' || type === 'editProfile') {
      return (
        <>
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="top"
            children={buttonData.firstButtonText.text}
            textColor={buttonData.firstButtonText.color}
            onClick={buttonData.onClickFirstButton}
          />
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="foot"
            children={buttonData.secondButtonText?.text}
            textColor={buttonData.secondButtonText?.color}
            onClick={buttonData.onClickSecondButton}
          />
          <Spacing height={8} />
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="alone"
            children="취소"
            onClick={buttonData.onClickCancelButton}
          />
        </>
      )
    } else if (type === 'myProfile') {
      return (
        <>
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="top"
            children={buttonData.firstButtonText.text}
            textColor={buttonData.firstButtonText.color}
            onClick={buttonData.onClickFirstButton}
          />
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="middle"
            children={buttonData.secondButtonText?.text}
            textColor={buttonData.secondButtonText?.color}
            onClick={buttonData.onClickSecondButton}
          />
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="foot"
            children={buttonData.thirdButtonText?.text}
            textColor={buttonData.thirdButtonText?.color}
            onClick={buttonData.onClickThirdButton}
          />
          <Spacing height={8} />
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="alone"
            children="취소"
            onClick={buttonData.onClickCancelButton}
          />
        </>
      )
    } else {
      return (
        <>
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="withProfile"
            imageUrl={friendImageUrl}
            children={getWithProfileChildrenText()}
            xlargeChildren={getWithProfileXlargeChildrenText()}
            textColor="gray_200"
          />
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="foot"
            children={buttonData.firstButtonText.text}
            textColor={buttonData.firstButtonText.color}
            onClick={buttonData.onClickFirstButton}
          />
          <Spacing height={8} />
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="alone"
            children="취소"
            onClick={buttonData.onClickCancelButton}
          />
        </>
      )
    }
  }

  return (
    <ProfileButtonsWrapper type={type}>
      {renderMenuButtons()}
      <Spacing height={32} />
    </ProfileButtonsWrapper>
  )
}

export default ProfileMenuButton

const ProfileButtonsWrapper = styled(FlexBox)<{
  type: ProfileButtonVariantType
}>`
  flex-direction: column;
  z-index: 999;
  position: fixed;
  top: ${({ type }) =>
    type === 'report' || type === 'editProfile'
      ? `calc(100vh - 184px)`
      : type === 'myProfile'
      ? `calc(100vh - 222px)`
      : `calc(100vh - 280px)`};
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
`
