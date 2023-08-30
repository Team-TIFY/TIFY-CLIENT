import WeeklyMainQuestion from './WeeklyMainQuestion';
import { Route, Routes } from 'react-router-dom';
import AppBarTemplate from '@components/layouts/AppBarTemplate';
import AnswerDailyQuestion from './AnswerDailyQuestion';
import CheckAllAnswers from './CheckAllAnswers';
const WeeklyRouter = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <AppBarTemplate variant='logoWithAlarm' hasNav={true}>
            <WeeklyMainQuestion />
        </AppBarTemplate>
      } />
    <Route path="/answer" element={
        <AppBarTemplate variant='backPushWithMenu' label={'투데이 질문'} hasNav={false}>
            <AnswerDailyQuestion/>
        </AppBarTemplate>
    } />
    <Route path="/answers" element={
      <AppBarTemplate variant='backPushWithMenu' label={'투데이 질문'} hasNav={false}>
        <CheckAllAnswers/>
      </AppBarTemplate>
    }/>
    </Routes>
  );
}

export default WeeklyRouter;
