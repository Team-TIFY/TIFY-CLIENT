import WeeklyMainQuestion from './WeeklyMainQuestion';
import { Route, Routes } from 'react-router-dom';
import AppBarTemplate from '@components/layouts/AppBarTemplate';
import AnswerDailyQuestion from './AnswerDailyQuestion';
const WeeklyRouter = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <AppBarTemplate variant='logoWithAlarm' hasNav={true}>
            <WeeklyMainQuestion />
        </AppBarTemplate>
      } />
    <Route path="/answer" element={
        <AppBarTemplate variant='backPushWithMenu' hasNav={false}>
            <AnswerDailyQuestion/>
        </AppBarTemplate>
    } />
    </Routes>
  );
}

export default WeeklyRouter;
