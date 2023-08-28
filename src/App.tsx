import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import Layout from '@components/layouts/Layout';
import Login from '@pages/home/Login';
import { Redirect } from '@pages/home/Redirect';
import { CheckUserAuth } from '@components/auth/CheckUserAuth';
import RequireAuth from '@components/auth/RequireAuth';
import Onboarding from "@pages/onboarding/Onboarding";
import { DetailInfo } from '@pages/onboarding/details/selectInfo/DetailInfo';
import MyProfileRouter from '@pages/myprofile';
import WeeklyRouter from '@pages/weekly';

function App(){

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element = {<RequireAuth/>}>
          <Route path="/" element={<Home />} />
          <Route path="/myprofile" element={<MyProfileRouter/>}></Route>
          <Route path="/weekly/*" element={<WeeklyRouter />}></Route>
          <Route path="/onboarding" element={<Onboarding />}></Route>
          <Route path="/onboarding/after" element={<DetailInfo/>}></Route>
      </Route>
        <Route element={<CheckUserAuth/>}>
          <Route path="/login" element={<Login />}/>
        </Route>
        <Route path="/kakao/callback" element={<Redirect/>}/>
      </Route>
    </Routes>
  );
}

export default App;
