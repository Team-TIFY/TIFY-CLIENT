import { Route, Routes } from 'react-router-dom';
import AppBarTemplate from '@components/layouts/AppBarTemplate';
import MyProfile from './MyProfile';
const MyProfileRouter = () =>{
  return (
    <Routes>
      <Route path="/" element={
        <AppBarTemplate variant='backPushWithMenu' label={'@user'} hasNav={true}>
            <MyProfile />
        </AppBarTemplate>
      } />
    </Routes>
  );
}

export default MyProfileRouter;
