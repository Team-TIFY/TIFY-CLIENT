import { Routes, Route, Navigate } from 'react-router-dom'
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
import NotFound from '@pages/home/NotFound'
import CheckTodayDate from '@components/WeeklyQuestion/CheckTodayDate'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import WeeklyMainQuestion from '@pages/weekly/WeeklyMainQuestion'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route
            path="/"
            element={
              <Routes>
                <Route element={<CheckTodayDate />}>
                  <Route
                    path="/"
                    element={
                      <AppBarTemplate
                        variant="logo"
                        rightChildren="alarm"
                        hasNav={true}
                      >
                        <WeeklyMainQuestion />
                      </AppBarTemplate>
                    }
                  />
                </Route>
              </Routes>
            }
          />
          <Route path="/weekly/*" element={<WeeklyRouter />} />
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
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  )
}

export default App
