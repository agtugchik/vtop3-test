import Header from '../Header/Header';
import React from 'react';
import cl from './App.module.scss';

const App = () => {
  return (
    <div className={cl.app}>
      <Header />
    </div>
  );
};

export default App;
