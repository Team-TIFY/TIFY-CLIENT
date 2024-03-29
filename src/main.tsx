import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Global, ThemeProvider } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { globalStyle } from '@styles/theme/global'
import { theme } from '@styles/index'
import ScrollToTop from '@components/layouts/ScrollToTop'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename="/">
    <Global styles={globalStyle} />
    <ScrollToTop />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>,
)
