import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Spacing } from '@components/atoms/Spacing'
import SquareButton from '@components/atoms/SquareButton'
import useProfileMenuButtonsData from '@libs/hooks/useProfileMenuButtonsData'

export type ProfileButtonVariant =
  | 'myProfile'
  | 'cutOffFriend'
  | 'report'
  | 'block'

const ProfileMenuButtons = <T extends ProfileButtonVariant>({
  type,
  friendUserId,
  friendImageUrl,
}: {
  type: T
  friendUserId?: T extends 'cutOffFriend' | 'block' ? string : undefined
  friendImageUrl?: T extends 'cutOffFriend' | 'block' ? string : undefined
}) => {
  const buttonData = useProfileMenuButtonsData(type)

  const renderMenuButtons = () => {
    if (type === 'myProfile' || type === 'report') {
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
    } else {
      return (
        <>
          <SquareButton
            variant="xlargeSquare"
            subVariant="default"
            xlargeVariant="withProfile"
            imageUrl={friendImageUrl}
            children={
              type === 'block'
                ? `@${friendUserId} 님을`
                : `원하는 경우 @${friendUserId} 님께`
            }
            xlargeChildren={
              type === 'block'
                ? `정말 차단하시겠습니까?`
                : '친구를 다시 요청할 수 있습니다.'
            }
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

export default ProfileMenuButtons

const ProfileButtonsWrapper = styled(FlexBox)<{ type: ProfileButtonVariant }>`
  flex-direction: column;
  z-index: 999;
  position: fixed;
  top: ${({ type }) =>
    type === 'myProfile' || type === 'report'
      ? `calc(100vh - 184px)`
      : `calc(100vh - 280px)`};
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
`
