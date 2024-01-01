import { PastTodayListItemPropsType } from '@models/components/Profile/profile'
import TodayList from '@components/atoms/TodayList'

const PastTodayListItem = ({ pastTodayAnswer }: PastTodayListItemPropsType) => {
  return (
    <>
      {pastTodayAnswer.map((todayList, index) => (
        <TodayList
          key={index}
          todayAnswerList={todayList}
          isLastMonth={index === pastTodayAnswer.length - 1}
        />
      ))}
    </>
  )
}

export default PastTodayListItem
