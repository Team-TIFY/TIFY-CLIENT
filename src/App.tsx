import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import Layout from '@components/layouts/Layout';
import Login from '@pages/home/Login';
import { Redirect } from '@pages/home/Redirect';
import { CheckUserAuth } from '@components/auth/CheckUserAuth';
import RequireAuth from '@components/auth/RequireAuth';
import { MyProfile } from '@pages/myprofile';
import Onboarding from "@pages/onboarding/Onboarding";
import { WeeklyQuestion } from '@pages/weekly';
import { DetailInfo } from '@pages/onboarding/details/selectInfo/DetailInfo';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element = {<RequireAuth/>}>
          <Route path="/" element={<Home />} />
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="/onboarding" element={<Onboarding />}></Route>
          <Route path="/onboarding/after" element={<DetailInfo/>}></Route>
          <Route path="/weekly" element={<WeeklyQuestion/>}></Route>
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
