import { RightChevron } from '@assets/icons/RightChevron'
import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useNavigate } from 'react-router-dom'

const Notice = () => {
  const mockData = [
    {
      id: 0,
      title: '티피 ver.2.0 업데이트 안내',
      date: '2023-10-12',
      content: '이것은 첫 번째 공지사항의 내용입니다.',
    },
    {
      id: 1,
      title: '티피 ver.2.0 업데이트 안내',
      date: '2023-10-11',
      content:
        '두 번째 공지사항은 더 긴 내용을 가지고 있습니다. 여기에는 공지사항의 내용이 들어갑니다. 이렇게 말이죠.',
    },
    {
      id: 2,
      title:
        '티피 ver.2.0 업데이트 안내 티피 ver.2.0 업데이트 안내 두줄일 경우',
      date: '2023-10-10',
      content:
        '세 번째 공지사항은 간단한 예제입니다. 이 내용은 공지사항의 내용입니다.',
    },
  ]
  const navigate = useNavigate()
  const goNotice = (postId: number) => {
    navigate(`${window.location.pathname + '/' + postId}`)
  }
  return (
    <Wrapper>
      {mockData.map((item) => (
        <NoticeList onClick={() => goNotice(item.id)} key={item.id}>
          <TitleWrap>
            <Text typo="Body_14" color="gray_100" children={item.title} />
            <DateWrap>{item.date}</DateWrap>
          </TitleWrap>
          <RightChevron />
        </NoticeList>
      ))}
    </Wrapper>
  )
}

export default Notice

const Wrapper = styled.div`
  margin-top: 16px;
`
const NoticeList = styled.div`
  height: 74px;
  width: 100%;
  padding: 16px 20px 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TitleWrap = styled.div`
  width: 90%;
`
const DateWrap = styled.div`
  font-weight: 400;
  letter-spacing: -1.1%;
  font-size: 10px;
  color: ${theme.palette.gray_400};
  margin-top: 6px;
`
