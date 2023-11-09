import { SendMsgIcon } from '@assets/icons/SendMsgIcon'
import { SmallDownChev } from '@assets/icons/SmallDownChev'
import { UpChevron } from '@assets/icons/UpChevron'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerCenter = () => {
  const initialButtonStates = Array(11).fill({ istoggle: false })
  const [buttonStates, setButtonStates] = useState(initialButtonStates)
  const [openIndex, setOpenIndex] = useState(-1)

  const updateState = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
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
          <FAQList istoggle={openIndex === 0} onClick={() => updateState(0)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="프로필 정보를 수정하고 싶어요."
              />
              <CategoryDiv>계정</CategoryDiv>
            </CategoryWrap>

            {openIndex === 0 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 0}>
            프로필 사진, 이름, 아이디, 생년월일, 상태를 수정할 수 있어요.
            <CaptionMdiv>
              경로: 하단 ‘마이’ → 이름 우측 ‘케밥 메뉴 아이콘’ → ‘프로필 수정’
            </CaptionMdiv>
            <br />
            프로필 사진을 기본 이미지로 변경하고 싶다면, 아래 경로를 추가로
            진행해 주세요.
            <CaptionMdiv>
              경로: ‘프로필 사진 변경’ → ‘기본 이미지로 변경’
            </CaptionMdiv>
            여러 기본 이미지 중 랜덤으로 부여됩니다.
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 1} onClick={() => updateState(1)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="데이터가 초기화 되었어요."
              />
              <CategoryDiv>계정</CategoryDiv>
            </CategoryWrap>
            {openIndex === 1 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 1}>
            데이터는 가입 시 선택한 로그인 수단/계정에 따라 저장됩니다.
            <br />
            이전과 동일한 로그인 수단으로 다시 로그인해 주세요.
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 2} onClick={() => updateState(2)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="친구를 끊고 싶어요."
              />
              <CategoryDiv>친구</CategoryDiv>
            </CategoryWrap>
            {openIndex === 2 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 2}>
            친구 상태를 끊을 수 있어요.
            <CaptionMdiv>
              경로: 하단 ‘프렌즈’ → 친구 상태를 끊고자 하는 사용자 선택 → 해당
              사용자 프로필로 이동 → 이름 하단 ‘친구’ → ‘친구 끊기’
            </CaptionMdiv>
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 3} onClick={() => updateState(3)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="차단한 사실을 친구가 알 수 있나요?"
              />
              <CategoryDiv>친구</CategoryDiv>
            </CategoryWrap>
            {openIndex === 3 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 3}>
            차단 시, 차단되었다는 알림은 가지 않으나, 차단 당한 사용자는 다음과
            같이 조치됩니다.
            <br />
            <br />
            - 서로 간의 친구 관계가 끊어집니다.
            <br />- 차단 당한 사용자는 차단한 사용자의 아이디를 검색해도
            검색되지 않습니다.
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 4} onClick={() => updateState(4)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="이전 투데이 질문에 답하고 싶어요."
              />
              <CategoryDiv>투데이</CategoryDiv>
            </CategoryWrap>
            {openIndex === 4 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 4}>
            이전 투데이 질문의 경우 해당 주간 내의 이전 질문에 대한 답변만
            가능합니다. 따라서 지난 주차의 이전 질문 혹은 그 이상의 과거의 이전
            질문에 대해서는 답변이 불가능합니다.
            <CaptionMdiv>
              경로: 하단 ‘투데이’ → 상단 ‘요일 아이콘’ 클릭 → 이전 요일 질문에
              대한 답변 작성
            </CaptionMdiv>
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 5} onClick={() => updateState(5)}>
            <CategoryWrap>
              <div>
                <Text
                  typo="Body_14"
                  color="gray_100"
                  children="이전에 답변한 투데이 질문은 어디에서 볼 수"
                />
                <div
                  style={{
                    width: '91px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Text typo="Body_14" color="gray_100" children="있나요?" />
                  <CategoryDiv>계정</CategoryDiv>
                </div>
              </div>
            </CategoryWrap>
            {openIndex === 5 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 5}>
            본인이 이전에 답변한 투데이 질문을 확인할 수 있어요.
            <CaptionMdiv>
              경로: 하단 ‘마이’ → 이름 하단 ‘지난 투데이’
            </CaptionMdiv>
            <br />
            친구가 이전에 답변한 투데이 질문을 확인하고 싶다면, 아래 경로로
            진행해 주세요.
            <CaptionMdiv>
              경로: 하단 ‘프렌즈’ → 답변을 확인하고 싶은 사용자 선택 → 해당
              사용자 프로필로 이동 → 사용자 이름 하단 ‘지난 투데이’
            </CaptionMdiv>
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 6} onClick={() => updateState(6)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="투데이 답변을 수정하고 싶어요."
              />
              <CategoryDiv>투데이</CategoryDiv>
            </CategoryWrap>
            {openIndex === 6 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 6}>
            아쉽게도 한번 답변한 투데이 답변은 수정할 수 없어요.
            <br />
            투데이 질문에 대한 답변을 삭제하고 싶다면 @티피프렌즈 로
            문의해주세요.
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 7} onClick={() => updateState(7)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="내 취향은 누가 볼 수 있나요?"
              />
              <CategoryDiv>취향</CategoryDiv>
            </CategoryWrap>
            {openIndex === 7 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 7}>
            내 취향은 나와 친구가 된 사용자만이 확인할 수 있어요.,
            <br />
            친구를 끊거나, 차단하는 경우 해당 사용자는 나의 취향을 더이상 확인할
            수 없습니다.
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 8} onClick={() => updateState(8)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="취향이 바뀌어 수정하고 싶어요."
              />
              <CategoryDiv>취향</CategoryDiv>
            </CategoryWrap>
            {openIndex === 8 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 8}>
            아쉽게도 현재 티피 어플에서는 취향 답변을 수정할 수 없어요.
            <br />
            수정이 가능하도록 열심히 만들고 있으니 조금만 기다려주세요!
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 9} onClick={() => updateState(9)}>
            <CategoryWrap>
              <div>
                <Text
                  typo="Body_14"
                  color="gray_100"
                  children="추천된 상품은 친구가 직접 담은 위시리스트인"
                />
                <div
                  style={{
                    width: '91px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Text typo="Body_14" color="gray_100" children="가요?" />
                  <CategoryDiv>선물</CategoryDiv>
                </div>
              </div>
            </CategoryWrap>
            {openIndex === 9 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 9}>
            추천된 상품은 취향 질문에 대한 친구의 답변으로 구성됩니다.
            <br />
            친구가 직접 담은 위시리스트는 아니지만, 친구가 선택한 취향 질문의
            선택지를 바탕으로 구성 되기에, 친구의 취향에 더욱 잘 맞는 제품을
            확인할 수 있습니다.
          </ContentWrap>
        </div>
      </FlexBox>
      <FlexBox>
        <div>
          <FAQList istoggle={openIndex === 10} onClick={() => updateState(10)}>
            <CategoryWrap>
              <Text
                typo="Body_14"
                color="gray_100"
                children="티피에서 직접 선물할 수 없나요?"
              />
              <CategoryDiv>선물</CategoryDiv>
            </CategoryWrap>
            {openIndex === 10 ? <UpChevron /> : <SmallDownChev />}
          </FAQList>
          <ContentWrap istoggle={openIndex === 10}>
            아쉽게도 현재 티피 어플에서는 직접 선물이 어려워요.
            <br />
            추천된 상품을 클릭하면 구매가 가능한 웹사이트로 이동되니, 해당
            웹사이트에서 결제를 진행할 수 있습니다.
          </ContentWrap>
        </div>
      </FlexBox>
      <div style={{ height: '31px' }}></div>
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

const FAQList = styled.div<{
  istoggle: boolean
}>`
  width: 316px;
  min-height: 52px;
  padding: 16px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ istoggle }) =>
    istoggle === true ? 'none' : `0.3px solid ${theme.palette.gray_700} `};
`
const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
`

const CategoryDiv = styled.div`
  min-width: 31px;
  height: 18px;
  padding: 0.5px 6px 0.5px 6px;
  margin-left: 6px;
  text-align: center;
  border-radius: 13px;
  background-color: ${theme.palette.gray_700};
  color: ${theme.palette.gray_200};
  ${theme.typo.Caption_10};
`

const CaptionMdiv = styled.div`
  ${theme.typo.Caption_12M}
`

const ContentWrap = styled.div<{
  istoggle: boolean
}>`
  width: 316px;
  display: ${({ istoggle }) => (istoggle === true ? 'block' : 'none')};
  background-color: #20202780;
  ${theme.typo.Caption_12R};
  color: ${theme.palette.gray_100};
  padding: 16px 0 16px 0;
`
