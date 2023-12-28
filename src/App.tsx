import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layouts/Layout'
import Login from '@pages/home/Login'
import { KaKaoRedirect } from '@pages/home/Redirect/KaKaoRedirect'
import { AppleRedirect } from '@pages/home/Redirect/AppleRedirect'
import { CheckUserAuth } from '@components/auth/CheckUserAuth'
import RequireAuth from '@components/auth/RequireAuth'
import ProfileRouter from '@pages/profile'
import WeeklyRouter from '@pages/weekly'
import FriendsRouter from '@pages/friends'
import OnboardingRouter from '@pages/onboarding'
import SettingRouter from '@pages/settingPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route path="*" element={<WeeklyRouter />} />
          <Route path="/profile/*" element={<ProfileRouter />} />
          <Route path="/friends/*" element={<FriendsRouter />} />
          <Route path="/setting/*" element={<SettingRouter />} />
          <Route path="/onboarding" element={<OnboardingRouter />} />
        </Route>
        <Route element={<CheckUserAuth />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/kakao/callback" element={<KaKaoRedirect />} />
        <Route path="/apple/callback" element={<AppleRedirect />} />
      </Route>
    </Routes>
  )
}

export default App
