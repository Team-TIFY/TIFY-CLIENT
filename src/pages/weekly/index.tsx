import { WeeklyMainQuestion } from './WeeklyMain';
import { Route, Routes } from 'react-router-dom';
import AppBarTemplate from '@components/layouts/AppBarTemplate';
const WeeklyRouter = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <AppBarTemplate variant='logoWithAlarm' hasNav={true}>
            <WeeklyMainQuestion />
        </AppBarTemplate>
      } />
    <Route path="/abc" element={
        <AppBarTemplate variant='backPushWithMenu' hasNav={false}>
            엥티비
        </AppBarTemplate>
    } />
    </Routes>
  );
}

export default WeeklyRouter;
