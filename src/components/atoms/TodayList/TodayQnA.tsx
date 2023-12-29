import { theme } from '@styles/theme'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '../Text'
import { TodayQnAPropsType } from '@models/components/atoms/TodayCategory'

const TodayQnA = ({ answer }: TodayQnAPropsType) => {
  return (
    <FlexBox
      direction="column"
      gap={12}
      align="flex-start"
      style={{
        borderLeft: `1px dashed ${theme.palette.gray_500}`,
        width: '100%',
        marginLeft: '16px',
        padding: `2px 12px`,
      }}
    >
      <Text typo="SCD_Body_12L" color="gray_100">
        {`Q. ` + answer.question}
      </Text>
      <Text typo="SCD_Body_12M" color="gray_100">
        {`A. ` + answer.answer}
      </Text>
    </FlexBox>
  )
}

export default TodayQnA
