import { DailyAnswerContentInfo } from '@libs/types/questionType'
import { TextBubble } from '@components/atoms/TextBubble'
import { useEffect, useState } from 'react'
import { UserApi } from '@utils/apis/user/UserApi'
const AnswerList = ({ answerInfo, isMine }: DailyAnswerContentInfo) => {
  interface BubbleProfile {
    profileImg: string
    nickname: string
  }
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
    <>
      <TextBubble
        variant={isMine ? 'new' : 'old'}
        nickname={profile.nickname}
        reply={answerInfo.content}
      />
    </>
  )
}

export default AnswerList
