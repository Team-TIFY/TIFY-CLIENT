import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import Layout from '@components/layouts/Layout';
import Login from '@pages/home/Login';
import { Redirect } from '@pages/home/Redirect';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/kakao/callback" element={<Redirect/>}/>
      </Route>
    </Routes>
  );
}

export default App;
