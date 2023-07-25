import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import Layout from '@components/layouts/Layout';
import Login from '@pages/home/Login';
import { Redirect } from '@pages/home/Redirect';
import { CheckUserAuth } from '@components/auth/CheckUserAuth';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<CheckUserAuth/>}>
          <Route path="/login" element={<Login />}/>
        </Route>
        <Route path="/kakao/callback" element={<Redirect/>}/>
      </Route>
    </Routes>
  );
}

export default App;
