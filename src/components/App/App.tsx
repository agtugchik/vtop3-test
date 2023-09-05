import Header from '../UI/Header/Header';
import React from 'react';
import cl from './App.module.scss';
// import Footer from '../UI/Footer/Footer';
// import AppRouter from '../AppRouter/AppRouter';

const App = () => {
  return (
    <div className={cl.app}>
      <Header />
      {/* <AppRouter />
      <Footer /> */}
    </div>
  );
};

export default App;
