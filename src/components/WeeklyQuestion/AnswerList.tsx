import { DailyAnswerContentInfo } from '@utils/apis/weekly/questionType'
import { TextBubble } from '@components/atoms/TextBubble'
import { useEffect, useState } from 'react'
import { UserApi } from '@utils/apis/user/UserApi'

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
    const data = await UserApi.GET_USER_INFO(answerInfo.id)
    setProfile({
      profileImg: data.thumbnail,
      nickname: data.userName,
    })
  }
  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <>
      <TextBubble
        variant={isMine ? 'new' : 'old'}
        nickname={isMine ? 'ME' : profile.nickname}
        reply={answerInfo.content}
      />
    </>
  )
}

export default AnswerList
