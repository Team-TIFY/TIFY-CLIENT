import { AlarmIcon } from '@assets/icons/AlarmIcon'
import Announce from '@assets/icons/Announce'
import Chat from '@assets/icons/Chat'
import { InformationIcon } from '@assets/icons/InformationIcon'
import { LogoutIcon } from '@assets/icons/LogoutIcon'
import RightChevron from '@assets/icons/RightChevron'
import { SecurityIcon } from '@assets/icons/SecurityIcon'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { Vector } from './../../assets/icons/Vector'

const Info = () => {
  const navigate = useNavigate()

  const linktoNotion = (linkUrl: string) => {
    window.open(linkUrl)
  }
  return (
    <Wrapper>
      <SettingList onClick={() => navigate('/setting/info/version')}>
        <Text children="앱 버전" typo="Caption_12R" color="gray_400" />
        <Height />
        <Wrap>
          <Text children="버전 정보(2.28.0)" typo="Body_14" color="gray_100" />
          <RightChevron />
        </Wrap>
      </SettingList>
      <Margin />
      <SettingList
        onClick={() =>
          linktoNotion(
            'https://www.notion.so/tify-thisis4u/9e75acf1487c481a9fe818754198b73a',
          )
        }
      >
        <Wrap>
          <Text children="서비스 이용약관" typo="Body_14" color="gray_100" />
          <RightChevron />
        </Wrap>
      </SettingList>
      <SettingList
        onClick={() =>
          linktoNotion(
            'https://www.notion.so/tify-thisis4u/9e75acf1487c481a9fe818754198b73a',
          )
        }
      >
        <Wrap>
          <Text children="개인정보 처리 방침" typo="Body_14" color="gray_100" />
          <RightChevron />
        </Wrap>
      </SettingList>
      <SettingList
        onClick={() =>
          linktoNotion(
            'https://www.notion.so/tify-thisis4u/9e75acf1487c481a9fe818754198b73a',
          )
        }
      >
        <Wrap>
          <Text
            children="개인정보 수집 및 이용 동의서"
            typo="Body_14"
            color="gray_100"
          />
          <RightChevron />
        </Wrap>
      </SettingList>
      <SettingList
        onClick={() =>
          linktoNotion(
            'https://www.notion.so/tify-thisis4u/9e75acf1487c481a9fe818754198b73a',
          )
        }
      >
        <Wrap>
          <Text
            children="커뮤니티 가이드라인"
            typo="Body_14"
            color="gray_100"
          />
          <RightChevron />
        </Wrap>
      </SettingList>
    </Wrapper>
  )
}

export default Info

const Wrapper = styled.div`
  margin-top: 16px;
  height: 100%;
  padding: 0 20px 0 24px;
`

const SettingList = styled.div`
  height: 56px;
  width: 100%;
  padding: 16px 20px 16px 16px;
`
const Margin = styled.div`
  height: 40px;
`

const Height = styled.div`
  height: 6px;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  align-items: center;
`
