import { Spacing } from '@components/atoms/Spacing'
import TodayCategory from '@components/atoms/TodayCategory'
import { categoryList } from '@components/atoms/TodayCategoryList'
import { FlexBox } from '@components/layouts/FlexBox'
import { authState } from '@libs/store/auth'
import { useQuery } from '@tanstack/react-query'
import { UserApi } from '@utils/apis/user/UserApi'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const PastToday = () => {
  const auth = useRecoilValue(authState)
  const location = useParams()

  const { data } = useQuery(['pastTodayCategoryCount'], () =>
    UserApi.GET_PAST_TODAY_CATEGORY_COUNT(auth.userProfile.id),
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
