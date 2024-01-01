import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { UserApi } from '@apis/UserApi'
import TodayCategory from '@components/atoms/TodayCategory'
import { Spacing } from '@components/atoms/Spacing'
import { categoryList } from '@constants/atoms/todayCategory'
import { FlexBox } from '@components/layouts/FlexBox'
import { profileQueryKeys } from '@constants/queryKeys/profileQueryKeys'

const PastToday = () => {
  const location = useParams()

  const { data } = useQuery([profileQueryKeys.PAST_TODAY_CATEGORY_COUNT], () =>
    UserApi.GET_PAST_TODAY_CATEGORY_COUNT(Number(location.id)),
  )

  return (
    <FlexBox direction="column" style={{ padding: '0 12px' }}>
      {data?.map((category, index) => (
        <TodayCategory
          key={index}
          categoryName={categoryList[index].name}
          categoryValue={category.dailyQuestionCategory}
          infoCount={category.count}
          id={Number(location.id)}
        />
      ))}
      <Spacing height={32} />
    </FlexBox>
  )
}

export default PastToday
