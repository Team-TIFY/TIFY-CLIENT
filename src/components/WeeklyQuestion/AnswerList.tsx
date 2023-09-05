import { DailyAnswerContentInfo } from "@libs/types/questionType"
const AnswerList = ({ answerInfo, isMine }: DailyAnswerContentInfo) => {
  return (
    <>
      <div style={{ color: 'white', width: '100%', height: '100px' }}>{answerInfo.content}</div>
    </>
  )
}

export default AnswerList