import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../page/Index';
import Pokemon from '../page/Pokemon';
import ErrorPage from '../page/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Index />} />
        <Route path={'/:id'} element={<Pokemon />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
