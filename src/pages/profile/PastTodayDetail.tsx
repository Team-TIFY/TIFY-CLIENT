import { Spacing } from '@components/atoms/Spacing'
import TodayCategoryList from '@components/atoms/TodayCategoryList'
import TodayList from '@components/atoms/TodayList'
import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { UserApi } from '@utils/apis/user/UserApi'
import { useRecoilValue } from 'recoil'
import { profileState } from '@libs/store/profile'
import { useParams } from 'react-router-dom'
import { Text } from '@components/atoms/Text'

const PastTodayDetail = () => {
  const profileStateData = useRecoilValue(profileState)
  const location = useParams()

  console.log(location.id)

  const { data: pastTodayAnswer = [] } = useQuery(
    ['pastTodayAnswer', location.id, profileStateData.pastTodayCategory],
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
          pastTodayAnswer.map((todayList, index) => (
            <>
              <TodayList
                key={index}
                todayAnswerList={todayList}
                isLastMonth={index === pastTodayAnswer.length - 1}
              />
            </>
          ))
        ) : (
          <>
            <Spacing height={64} />
            <Text typo="Subhead_14" color="gray_200">
              아직 답변이 없어요.
            </Text>
            <Text typo="Subhead_14" color="gray_200">
              투데이 질문에 답변해보세요.
            </Text>
          </>
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
