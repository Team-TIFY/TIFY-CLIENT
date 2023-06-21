import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { useQueryClient } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';

function App() {

  return (
      <Routes>
        <Route path="/" element ={<Home/>}/>
      </Routes>
  )
}

export default App
