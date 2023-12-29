import { TIfyLogoSymbol } from '@assets/icons/TifyLogoSymbol'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useQuery } from '@tanstack/react-query'
import { SettingApi } from '@utils/apis/setting'
import { useEffect, useState } from 'react'

const VersionInfo = () => {
  const {
    data = {
      iosVersion: '1.0.0',
      aosVersion: '1.0.0',
    },
  } = useQuery(['version'], () => SettingApi.GET_VERSION())
  const [OSground, setOSGround] = useState<'IOS' | 'AOS'>('IOS')
  useEffect(() => {
    setOSGround('IOS')
  }, [])
  return (
    <Wrapper>
      <Wrap>
        <TIfyLogoSymbol />
      </Wrap>
      <Text
        children="가장 최신 버전을 사용 중입니다."
        typo="Subhead_14"
        color="gray_100"
      />
      <VerText>
        현재 버전 {data[OSground === 'AOS' ? 'aosVersion' : 'iosVersion']}
      </VerText>
    </Wrapper>
  )
}
export default VersionInfo

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`
const Wrap = styled.div`
  display: flex;
  height: calc(var(--vh, 1vh) * 50 - 80px);
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 32px;
`
const VerText = styled.div`
  color: ${theme.palette.gray_300};
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -1.1%;
  margin-top: 12px;
`
