import WeeklyMainQuestion from './WeeklyMainQuestion';
import { Route, Routes } from 'react-router-dom';
import AppBarTemplate from '@components/layouts/AppBarTemplate';
import AnswerDailyQuestion from './AnswerDailyQuestion';
import CheckAllAnswers from './CheckAllAnswers';
import CheckTodayDate from '@components/WeeklyQuestion/CheckTodayDate';
const WeeklyRouter = () => {
  return (
    <Routes>
      <Route element={<CheckTodayDate />}>
        <Route path="/" element={
          <AppBarTemplate variant='logoWithAlarm' hasNav={true}>
            <WeeklyMainQuestion />
          </AppBarTemplate>
        } />
        <Route path="/answer" element={
          <AppBarTemplate variant='backPushWithMenu' label={'투데이 질문'} hasNav={false}>
            <AnswerDailyQuestion />
          </AppBarTemplate>
        } />
        <Route path="/answers" element={
          <AppBarTemplate variant='backPushWithMenu' label={'투데이 질문'} hasNav={false}>
            <CheckAllAnswers />
          </AppBarTemplate>
        } />
      </Route>
    </Routes>
  );
}

export default WeeklyRouter;
