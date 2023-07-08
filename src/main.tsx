import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { css, Global, ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename="/">
    <Global>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Global>
  </BrowserRouter>
  ,
)
