import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import FirstPortfolio from './pages/FirstPortfolio/FirstPortfolio';


const AppRouter = () => {

  const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Suspense fallback={<div>loading!!</div>}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/first-portfolio" element={<FirstPortfolio />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </QueryClientProvider>
    )
}

export default AppRouter;