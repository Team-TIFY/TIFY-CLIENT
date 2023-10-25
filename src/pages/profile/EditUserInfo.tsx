import { LongInput } from '@components/atoms/Input/LongInput'
import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import styled from '@emotion/styled'
import useGetDate from '@libs/hooks/useGetDate'

export type EditUserInfoProps = {
  userName: string
  userId: string
  birth: string
  onBoardingStatus: string
}

const EditUserInfo = ({
  userName,
  userId,
  birth,
  onBoardingStatus,
}: EditUserInfoProps) => {
  console.log(userName, userId, birth, onBoardingStatus)

  const { getMonthOrDayFromBirth } = useGetDate()
  const { month, day } = getMonthOrDayFromBirth(birth)

  return (
    <EditUserInfoWrapper>
      <Padding>
        <Text
          typo="Caption_12R"
          children="이름/닉네임"
          color="gray_300"
          style={{ padding: '0 4px', marginBottom: '8px' }}
        />
        <LongInput
          width={312}
          padding={0}
          defaultValue={userName}
          placeholder="이름/닉네임을 입력해주세요"
        />
        <Spacing height={20} />
        <Text
          typo="Caption_12R"
          children="아이디"
          color="gray_300"
          style={{ padding: '0 4px', marginBottom: '8px' }}
        />
        <LongInput
          width={312}
          padding={0}
          defaultValue={`@` + userId}
          placeholder="아이디를 입력해주세요"
        />
        <Spacing height={20} />
        <Text
          typo="Caption_12R"
          children="생년월일"
          color="gray_300"
          style={{ padding: '0 4px', marginBottom: '8px' }}
        />
        <BirthInputWrapper>
          <LongInput
            width={116}
            padding={0}
            placeholder="연"
            defaultValue={`${birth.slice(0, 4)}년`}
          />
          <LongInput
            width={82}
            padding={0}
            placeholder="월"
            defaultValue={`${month}월`}
          />
          <LongInput
            width={82}
            padding={0}
            placeholder="일"
            defaultValue={`${day}일`}
          />
        </BirthInputWrapper>
        <Spacing height={20} />
        <Text
          typo="Caption_12R"
          children="상태"
          color="gray_300"
          style={{ padding: '0 4px', marginBottom: '8px' }}
        />
        <LongInput
          width={312}
          padding={0}
          defaultValue={onBoardingStatus}
          placeholder="상태를 입력해주세요"
        />
        <ButtonWrapper>
          <RoundButton
            variant="mediumRound"
            children="수정 완료"
            fullWidth={true}
            style={{ marginBottom: '9px' }}
          />
          <Spacing height={32} />
        </ButtonWrapper>
      </Padding>
    </EditUserInfoWrapper>
  )
}

export default EditUserInfo

const EditUserInfoWrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  padding-bottom: 176px;
`

const BirthInputWrapper = styled(FlexBox)`
  gap: 16px;
`

const ButtonWrapper = styled.div`
  width: 312px;
  position: fixed;
  bottom: 0;
`
