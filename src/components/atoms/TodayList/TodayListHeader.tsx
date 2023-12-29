import { TodayListHeaderPropsType } from '@models/components/atoms/TodayCategory'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '../Text'

const TodayListHeader = ({
  index,
  formattedYear,
  formattedMonth,
  formattedDate,
}: TodayListHeaderPropsType) => {
  return (
    <>
      <FlexBox justify="space-between" style={{ width: '100%' }}>
        {index === 0 && (
          <>
            <Text typo="Mont_Caption_12B" color="gray_300">
              {formattedMonth}
            </Text>
            <Text typo="Mont_Caption_12B" color="gray_300">
              {formattedYear}
            </Text>
          </>
        )}
      </FlexBox>
      <Text typo="Body_16" color="gray_300" style={{ marginRight: 'auto' }}>
        {formattedDate}
      </Text>
    </>
  )
}

export default TodayListHeader
