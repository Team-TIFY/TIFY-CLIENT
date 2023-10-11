import { Route, Routes } from 'react-router-dom'
import AppBarTemplate from '@components/layouts/AppBarTemplate'
import Setting from './Setting'
import CustomerCenter from './CustomerCenter'
import WriteForCustomer from './WriteForCustomer'
import Notice from './Notice'
import Account from './Account'
import Info from './Info'
import AlertSetting from './AlertSetting'
import SettingAppBar from '@components/settingPage/SettingAppBar'
import NoticeDetail from './NoticeDetail'
import VersionInfo from './VersionInfo'

const SettingRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SettingAppBar label="설정">
            <Setting />
          </SettingAppBar>
        }
      />
      <Route
        path="/notice"
        element={
          <SettingAppBar label="공지사항">
            <Notice />
          </SettingAppBar>
        }
      />
      <Route
        path="/notice/:postId"
        element={
          <SettingAppBar label="공지사항">
            <NoticeDetail />
          </SettingAppBar>
        }
      />
      <Route
        path="/customercenter"
        element={
          <SettingAppBar label="문의사항">
            <CustomerCenter />
          </SettingAppBar>
        }
      />
      <Route
        path="/customercenter/write"
        element={
          <SettingAppBar label="의견보내기">
            <WriteForCustomer />
          </SettingAppBar>
        }
      />
      <Route
        path="/account"
        element={
          <SettingAppBar label="계정 및 보안">
            <Account />
          </SettingAppBar>
        }
      />
      <Route
        path="/info"
        element={
          <SettingAppBar label="정보">
            <Info />
          </SettingAppBar>
        }
      />
      <Route
        path="/info/version"
        element={
          <SettingAppBar label="정보">
            <VersionInfo />
          </SettingAppBar>
        }
      />
      <Route
        path="/alertSetting"
        element={
          <SettingAppBar label="알림설정">
            <AlertSetting />
          </SettingAppBar>
        }
      />
    </Routes>
  )
}

export default SettingRouter
