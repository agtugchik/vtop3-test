import Header from '../UI/Header/Header';
import React from 'react';
import cl from './App.module.scss';
import Carousel from '../Carousel/Carousel';

const App = () => {
  return (
    <div className={cl.app}>
      <Header />
      <Carousel />
    </div>
  );
};

export default App;
