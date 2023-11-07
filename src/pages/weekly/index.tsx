import WeeklyMainQuestion from './WeeklyMainQuestion'
import { Route, Routes } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import AnswerDailyQuestion from './AnswerDailyQuestion'
import CheckAllAnswers from './CheckAllAnswers'
import CheckTodayDate from '@components/WeeklyQuestion/CheckTodayDate'
import Svg from '@components/atoms/Svg'
import FriendList from '@assets/icons/FriendList'
const WeeklyRouter = () => {
  return (
    <Routes>
      <Route element={<CheckTodayDate />}>
        <Route
          path="/"
          element={
            <AppBarTemplate variant="logo" rightChildren="alarm" hasNav={true}>
              <WeeklyMainQuestion />
            </AppBarTemplate>
          }
        />
        <Route
          path="/answer"
          element={
            <AppBarTemplate
              variant="backPush"
              label="투데이 질문"
              hasNav={false}
              rightChildren="actionButton"
              rightChildrenIcon={[
                <Svg
                  key="friendsMenuIcon"
                  children={<FriendList />}
                  onClick={() => {
                    console.log('클릭')
                  }}
                />,
              ]}
            >
              <AnswerDailyQuestion />
            </AppBarTemplate>
          }
        />
        <Route
          path="/answers"
          element={
            <AppBarTemplate
              variant="backPush"
              rightChildren="none"
              label="투데이 질문"
              hasNav={false}
            >
              <CheckAllAnswers />
            </AppBarTemplate>
          }
        />
      </Route>
    </Routes>
  )
}

export default WeeklyRouter
