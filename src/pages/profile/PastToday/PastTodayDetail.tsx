import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'

import { profileState } from '@libs/store/profile'
import { profileQueryKeys } from '@constants/queryKeys/profileQueryKeys'
import { UserApi } from '@apis/UserApi'
import { Spacing } from '@components/atoms/Spacing'
import TodayCategoryList from '@components/atoms/TodayCategoryList'
import { FlexBox } from '@components/layouts/FlexBox'
import NoAnswer from '@components/profile/PastToday/NoAnswer'
import PastTodayListItem from '@components/profile/PastToday/PastTodayListItem'

const PastTodayDetail = () => {
  const profileStateData = useRecoilValue(profileState)

  const location = useParams()

  const { data: pastTodayAnswer = [] } = useQuery(
    [
      profileQueryKeys.PAST_TODAY_ANSWER,
      location.id,
      profileStateData.pastTodayCategory,
    ],
    () =>
      UserApi.GET_PAST_TODAY_ANSWER(
        Number(location.id),
        profileStateData.pastTodayCategory,
      ),
  )

  return (
    <PastTodayDetailWrapper>
      <TodayCategoryListWrapper>
        <TodayCategoryList />
      </TodayCategoryListWrapper>
      <Spacing height={20} />
      <TodayAnswerListWrapper>
        {pastTodayAnswer.length ? (
          <PastTodayListItem pastTodayAnswer={pastTodayAnswer} />
        ) : (
          <NoAnswer />
        )}
      </TodayAnswerListWrapper>
    </PastTodayDetailWrapper>
  )
}

export default PastTodayDetail

const PastTodayDetailWrapper = styled.div``

const TodayCategoryListWrapper = styled(FlexBox)`
  padding: 16px 20px 0px 20px;
`

const TodayAnswerListWrapper = styled(FlexBox)`
  flex-direction: column;
  padding: 0 20px 0 24px;
`
