import ArticlePage from '../Pages/ArticlePage/ArticlePage';
import MainPage from '../Pages/MainPage/MainPage';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="main" />} />
      <Route path="main" element={<MainPage />} />
      <Route path="article/:id" element={<ArticlePage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
