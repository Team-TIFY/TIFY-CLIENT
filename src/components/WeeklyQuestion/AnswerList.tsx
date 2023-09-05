import { DailyAnswerContentInfo } from "@libs/types/questionType"
import { TextBubble } from "@components/atoms/TextBubble"
const AnswerList = ({ answerInfo, isMine }: DailyAnswerContentInfo) => {
  return (
    <>
      <TextBubble variant="new" nickname="유징이" reply={answerInfo.content} />
    </>
  )
}

export default AnswerList