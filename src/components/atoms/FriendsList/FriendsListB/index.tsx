import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { Avatar } from '@components/atoms/Avatar'
import Svg from '@components/atoms/Svg'
import CircleIcon from '@assets/icons/CircleIcon'
import { sliceString } from '@utils/sliceString'

/**
 * @param name 사용자 이름을 나타냄
 * @param currentState 사용자의 현재 상태를 나타냄 ex) 헬스장에서 운동 중 🏋️
 * @param onClick 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수를 나타냄
 * @param imageUrl 사용자 프로필 이미지 url을 나타냄
 * @param description 사용자 이름 하단에 들어갈 설명 글을 나타냄 'birthday' | 'none' | 'newUpdate'
 * @param birthdayDescription 생일이 언제인지 알려주는 필드임 '오늘' | '내일' | ''
 * @param birthday 생일 일자를 나타냄
 */

export type DescriptionType = 'birthday' | 'none' | 'newUpdate'

export type FriendsListBProps<T extends DescriptionType> = {
  name: string
  currentState: string
  onClick?: () => void
  imageUrl: string
  description: T
  birthdayDescription?: T extends 'birthday' ? string : undefined
  birthday?: T extends 'birthday' ? string : undefined
}

const FriendsListB = ({
  name,
  currentState,
  imageUrl = '',
  description,
  birthday,
  birthdayDescription,
  ...props
}: FriendsListBProps<DescriptionType>) => {
  return (
    <Wrapper {...props}>
      <FriendsProfileWrapper>
        <Avatar variant="small" imageUrl={imageUrl} />
        <FriendsInfoWrapper>
          <Text typo="Subhead_14" color="white">
            {name}
          </Text>
          {description === 'birthday' && (
            <FlexBox justify="flex-start" gap={2}>
              <Text color="gray_300" typo="Caption_10">
                {birthdayDescription && birthdayDescription + ' · '}
              </Text>
              <Text color="gray_300" typo="Caption_10">
                {birthday}
              </Text>
            </FlexBox>
          )}
          {description === 'newUpdate' && (
            <FlexBox justify="flex-start" gap={2}>
              <Svg children={<CircleIcon />} style={{ display: 'flex' }} />
              <Text color="purple_400" typo="Caption_10">
                새로운 업데이트
              </Text>
            </FlexBox>
          )}
        </FriendsInfoWrapper>
      </FriendsProfileWrapper>
      <FriendsCurrentStateWrapper>
        <StyledTextWrapper length={currentState.length > 15 ? 1 : 0}>
          <Text
            typo="Caption_10"
            color="gray_200"
            as="div"
            style={{ width: currentState.length > 15 ? '100%' : 'fit-content' }}
            children={sliceString(currentState, 15)}
          />
        </StyledTextWrapper>
      </FriendsCurrentStateWrapper>
    </Wrapper>
  )
}

export default FriendsListB

const Wrapper = styled(FlexBox)`
  width: 328px;
  height: 48px;
  justify-content: space-between;
  cursor: pointer;
`

const FriendsProfileWrapper = styled(FlexBox)`
  justify-content: space-between;
  gap: 12px;
  width: 180px;
  height: 100%;
`

const FriendsInfoWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`

const FriendsCurrentStateWrapper = styled(FlexBox)`
  width: 144px;
  height: 100%;
  justify-content: flex-end;
`

const StyledTextWrapper = styled(FlexBox)<{ length: 0 | 1 }>`
  width: ${({ length }) => (length ? `100%` : `fit-content`)};
  height: 26px;
  padding: 6px 8px;
  border-radius: 13px;
  background-color: ${theme.palette.gray_800};
`
