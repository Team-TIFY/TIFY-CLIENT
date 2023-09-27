import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layouts/Layout'
import Login from '@pages/home/Login'
import { Redirect } from '@pages/home/Redirect'
import { CheckUserAuth } from '@components/auth/CheckUserAuth'
import RequireAuth from '@components/auth/RequireAuth'
import MyProfileRouter from '@pages/myprofile'
import WeeklyRouter from '@pages/weekly'
import OnboardingRouter from "@pages/onboarding";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route path="*" element={<WeeklyRouter />} />
          <Route path="/myprofile/*" element={<MyProfileRouter />}></Route>
          <Route path="/onboarding" element={<OnboardingRouter />}></Route>
        </Route>
        <Route element={<CheckUserAuth />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/kakao/callback" element={<Redirect />} />
      </Route>
    </Routes>
  )
}

export default App
