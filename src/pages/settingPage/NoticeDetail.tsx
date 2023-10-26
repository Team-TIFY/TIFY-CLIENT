import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { useParams } from 'react-router-dom'

const NoticeDetail = () => {
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
        '안녕하세요, 티피 입니다. 안내사항입니다. 안내사항입니다.안내사항입니다.안내사항입니다.안내사항입니다.안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다..안내사항입니다.',
    },
  ]

  const params = parseInt(useParams().postId as string)
  console.log(params)
  return (
    <Wrapper>
      <TitleWrap>
        <Text
          typo="Subhead_16"
          color="gray_100"
          children={mockData[params].title}
        />
        <DateWrap>{mockData[params].date}</DateWrap>
      </TitleWrap>
      <ContentWrap>{mockData[params].content}</ContentWrap>
    </Wrapper>
  )
}

export default NoticeDetail

const Wrapper = styled.div`
  margin-top: 16px;
`
const TitleWrap = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px 20px 16px 24px;
`
const DateWrap = styled.div`
  font-weight: 400;
  letter-spacing: -1.1%;
  font-size: 10px;
  color: ${theme.palette.gray_400};
  margin-top: 6px;
  margin-bottom: 6px;
`
const ContentWrap = styled.div`
  padding: 16px 24px 16px 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -1.1%;
  color: ${theme.palette.gray_100};
`
