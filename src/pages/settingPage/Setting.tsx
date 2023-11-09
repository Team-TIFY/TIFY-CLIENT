import { AlarmIcon } from '@assets/icons/AlarmIcon'
import Announce from '@assets/icons/Announce'
import Chat from '@assets/icons/Chat'
import { InformationIcon } from '@assets/icons/InformationIcon'
import { LogoutIcon } from '@assets/icons/LogoutIcon'
import RightChevron from '@assets/icons/RightChevron'
import { SecurityIcon } from '@assets/icons/SecurityIcon'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'

const Setting = () => {
  const linkToUrl = (linkUrl: string) => {
    window.location.href = `setting/${linkUrl}`
  }

  return (
    <Wrapper>
      <SettingList onClick={() => linkToUrl('notice')}>
        <Wrap>
          <Announce />
          <Margin />
          <Text children="공지사항" typo="Body_16" color="gray_100" />
        </Wrap>
        <RightChevron />
      </SettingList>
      <SettingList onClick={() => linkToUrl('customercenter')}>
        <Wrap>
          <Chat />
          <Margin />
          <Text children="문의사항" typo="Body_16" color="gray_100" />
        </Wrap>
        <RightChevron />
      </SettingList>
      <SettingList onClick={() => linkToUrl('account')}>
        <Wrap>
          <SecurityIcon />
          <Margin />
          <Text children="계정 및 보안" typo="Body_16" color="gray_100" />
        </Wrap>
        <RightChevron />
      </SettingList>
      <SettingList onClick={() => linkToUrl('info')}>
        <Wrap>
          <InformationIcon />
          <Margin />
          <Text children="정보" typo="Body_16" color="gray_100" />
        </Wrap>
        <RightChevron />
      </SettingList>
      <SettingList onClick={() => linkToUrl('alertSetting')}>
        <Wrap>
          <AlarmIcon />
          <Margin />
          <Text children="알림설정" typo="Body_16" color="gray_100" />
        </Wrap>
        <RightChevron />
      </SettingList>
      <Height />
      <SettingList>
        <Wrap>
          <LogoutIcon />
          <Margin />
          <Text children="로그아웃" typo="Body_16" color="gray_100" />
        </Wrap>
      </SettingList>
    </Wrapper>
  )
}

export default Setting

const Wrapper = styled.div`
  margin-top: 16px;
  height: 100%;
`

const SettingList = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  padding: 16px 20px 16px 16px;
  align-items: center;
  justify-content: space-between;
`
const Margin = styled.div`
  width: 8px;
`

const Height = styled.div`
  height: 24px;
`

const Wrap = styled.div`
  display: flex;
`
