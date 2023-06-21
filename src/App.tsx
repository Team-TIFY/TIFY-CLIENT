import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { useQueryClient } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import Layout from '@components/layouts/Layout';

function App() {

  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element ={<Home/>}/>
        </Route>
      </Routes>
  )
}

export default App
