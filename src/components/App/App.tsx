import Header from '../UI/Header/Header';
import React from 'react';
import cl from './App.module.scss';
import Footer from '../UI/Footer/Footer';
import MainPage from '../Pages/MainPage/MainPage';

const App = () => {
  return (
    <div className={cl.app}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
