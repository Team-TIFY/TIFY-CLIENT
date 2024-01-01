import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'

const NoAnswer = () => {
  return (
    <>
      <Spacing height={64} />
      <Text typo="Subhead_14" color="gray_200">
        아직 답변이 없어요.
      </Text>
      <Text typo="Subhead_14" color="gray_200">
        투데이 질문에 답변해보세요.
      </Text>
    </>
  )
}

export default NoAnswer
