import { SendMsgIcon } from '@assets/icons/SendMsgIcon'
import { SmallDownChev } from '@assets/icons/SmallDownChev'
import { UpChevron } from '@assets/icons/UpChevron'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerCenter = () => {
  const initialButtonStates = [
    { istoggle: false },
    { istoggle: false },
    { istoggle: false },
    { istoggle: false },
  ]
  const [buttonStates, setButtonStates] = useState(initialButtonStates)

  const updateState = (index: number) => {
    const newButtonStates = [...buttonStates]
    newButtonStates[index].istoggle = !newButtonStates[index].istoggle
    setButtonStates(newButtonStates)
  }

  const navigate = useNavigate()
  const gotoWrite = () => {
    navigate(window.location.pathname + '/write')
  }

  return (
    <>
      <FlexBox>
        <SendMsg onClick={gotoWrite}>
          <SmallText>궁금한 점이 있을 땐</SmallText>
          <Gap />
          <BigText>
            <SendMsgIcon />
            <Gap />
            <Text typo="Subhead_16" color="gray_100" children="의견 보내기" />
          </BigText>
        </SendMsg>
      </FlexBox>
      <FlexBox>
        <Wrapper>
          <Text typo="Caption_12R" color="gray_300" children="자주 묻는 질문" />
        </Wrapper>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList onClick={() => updateState(0)}>
            <Text
              typo="Body_14"
              color="gray_100"
              children="휴대폰 인증 문자가 오지 않아요"
            />
            {buttonStates[0].istoggle === true ? (
              <UpChevron />
            ) : (
              <SmallDownChev />
            )}
          </FAQList>
          <ContentWrap istoggle={buttonStates[0].istoggle}>
            인증문자가 왜안오지
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList onClick={() => updateState(1)}>
            <Text
              typo="Body_14"
              color="gray_100"
              children="친구추가가 안돼요"
            />
            {buttonStates[1].istoggle === true ? (
              <UpChevron />
            ) : (
              <SmallDownChev />
            )}
          </FAQList>
          <ContentWrap istoggle={buttonStates[1].istoggle}>
            친추 ㅎㅎ
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList onClick={() => updateState(2)}>
            <Text typo="Body_14" color="gray_100" children="~가 되지 않아요" />
            {buttonStates[2].istoggle === true ? (
              <UpChevron />
            ) : (
              <SmallDownChev />
            )}
          </FAQList>
          <ContentWrap istoggle={buttonStates[2].istoggle}>
            안녕하세요, 티피 입니다. 안내사항입니다.
            안내사항입니다.안내사항입니다.안내사항입니다.안내사항입니다.안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다.
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList onClick={() => updateState(3)}>
            <Text typo="Body_14" color="gray_100" children="~~~~해요" />
            {buttonStates[3].istoggle === true ? (
              <UpChevron />
            ) : (
              <SmallDownChev />
            )}
          </FAQList>
          <ContentWrap istoggle={buttonStates[3].istoggle}>
            tify 안내사항.. tify 안내사항.. tify 안내사항.. tify 안내사항.. tify
            안내사항.. tify 안내사항.. tify 안내사항.. tify 안내사항.. tify
            안내사항.. tify 안내사항.. tify 안내사항.. tify 안내사항.. tify
            안내사항.. tify 안내사항.. tify 안내사항..
          </ContentWrap>
        </div>
      </FlexBox>
    </>
  )
}

export default CustomerCenter

const SendMsg = styled.div`
  width: 312px;
  height: 70px;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  padding: 16px 24px 16px 24px;
  background-color: ${theme.palette.gray_800};
`

const SmallText = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: ${theme.palette.gray_300};
`
const BigText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Gap = styled.div`
  height: 4px;
  width: 4px;
`
const Wrapper = styled.div`
  width: 312px;
  margin-top: 40px;
  margin-bottom: 12px;
`

const FAQList = styled.div`
  width: 312px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.3px ${theme.palette.gray_700} solid;
`
const ContentWrap = styled.div<{
  istoggle: boolean
}>`
  width: 312px;
  height: 100%;
  display: ${({ istoggle }) => (istoggle === true ? 'block' : 'none')};
  background-color: #20202780;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.palette.gray_100};
  line-height: 24px;
  letter-spacing: -1.1%;
  padding: 16px 0 40px 0;
`
