import RightChevron from '@assets/icons/RightChevron'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useNavigate } from 'react-router-dom'

const Info = () => {
  const navigate = useNavigate()

  const linktoNotion = (linkUrl: string) => {
    window.open(linkUrl)
  }
  return (
    <Wrapper>
      <SettingList
        height={90}
        onClick={() => navigate('/setting/info/version')}
      >
        <Text children="앱 버전" typo="Caption_12R" color="gray_400" />
        <Height />
        <Wrap>
          <Text children="버전 정보(2.28.0)" typo="Body_14" color="gray_100" />
          <RightChevron />
        </Wrap>
      </SettingList>
      <Margin isborder={true} />
      <Margin isborder={false} />
      <SettingList
        height={52}
        onClick={() =>
          linktoNotion(
            'https://tify-thisis4u.notion.site/db764680157346e1a5f8f757b94b543a',
          )
        }
      >
        <Wrap>
          <Text children="서비스 이용약관" typo="Body_14" color="gray_100" />
          <RightChevron />
        </Wrap>
      </SettingList>
      <SettingList
        height={52}
        onClick={() =>
          linktoNotion(
            'https://tify-thisis4u.notion.site/46ff4d5c23964bd08cba01abda6f01f9',
          )
        }
      >
        <Wrap>
          <Text children="개인정보 처리 방침" typo="Body_14" color="gray_100" />
          <RightChevron />
        </Wrap>
      </SettingList>
      <SettingList
        height={52}
        onClick={() =>
          linktoNotion(
            'https://www.notion.so/tify-thisis4u/78b9ea114e8a4fc88baa99d0072ed2be',
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

const SettingList = styled.div<{
  height: number
}>`
  height: ${({ height }) => `${height}px`};
  width: 100%;
  padding: 16px 0px 16px 0px;
`

const Margin = styled.div<{
  isborder: boolean
}>`
  border-bottom: ${({ isborder }) =>
    isborder ? `0.3px solid ${theme.palette.gray_700}` : 'none'};
  width: 100%;
  height: 12px;
`

const Height = styled.div`
  height: 18px;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
