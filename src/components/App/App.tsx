import Header from '../UI/Header/Header';
import React from 'react';
import cl from './App.module.scss';
import Carousel from '../Carousel/Carousel';
import Footer from '../UI/Footer/Footer';

const App = () => {
  return (
    <div className={cl.app}>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
