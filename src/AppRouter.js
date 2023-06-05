import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'


const AppRouter = () => {

  const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>loading!!</div>}>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    )
}

export default AppRouter;