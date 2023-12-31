import { DailyAnswerContentInfo } from '@models/apis/questionType'
import { TextBubble } from '@components/atoms/TextBubble'
import { useEffect, useState } from 'react'
import { UserApi } from '@apis/user/UserApi'
import styled from '@emotion/styled'

interface BubbleProfile {
  profileImg: string
  nickname: string
}

const AnswerList = ({ answerInfo, isMine }: DailyAnswerContentInfo) => {
  const [profile, setProfile] = useState<BubbleProfile>({
    profileImg: '',
    nickname: '',
  })
  const getUserInfo = async () => {
    const data = await UserApi.GET_USER_INFO(answerInfo.userId)
    setProfile({
      profileImg: data.thumbnail,
      nickname: data.userName,
    })
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <AnswerListContainer>
      {answerInfo.content === null && (
        <div
          style={{
            cursor: 'pointer',
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            minWidth: '124px',
            height: '48px',
            borderRadius: '24px',
          }}
        />
      )}
      <TextBubble
        variant={isMine ? 'new' : answerInfo ? 'old' : 'older'}
        nickname={isMine ? 'ME' : profile.nickname}
        reply={answerInfo.content ? answerInfo.content : '...'}
      />
    </AnswerListContainer>
  )
}

export default AnswerList

const AnswerListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
