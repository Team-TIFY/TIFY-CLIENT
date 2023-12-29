import WeeklyMainQuestion from './WeeklyMainQuestion'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import AnswerDailyQuestion from './AnswerDailyQuestion'
import CheckAllAnswers from './CheckAllAnswers'
import CheckTodayDate from '@components/WeeklyQuestion/CheckTodayDate'
import Svg from '@components/atoms/Svg'
import FriendList from '@assets/icons/FriendList'
import EditFriendList from '@pages/weekly/EditFriendList'
import { Navigate } from 'react-router-dom'

const WeeklyRouter = () => {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route element={<CheckTodayDate />}>
        <Route
          path="/editFriendList"
          element={
            <AppBarTemplate
              variant="backPush"
              label="친구 목록 편집"
              hasNav={false}
              rightChildren="none"
            >
              <EditFriendList />
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
              rightChildren="none"
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
              label="투데이 질문"
              hasNav={false}
              rightChildren="actionButton"
              rightChildrenIcon={[
                <Svg
                  key="friendsMenuIcon"
                  children={<FriendList />}
                  onClick={() => {
                    navigate('editFriendList')
                  }}
                />,
              ]}
            >
              <CheckAllAnswers />
            </AppBarTemplate>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default WeeklyRouter
