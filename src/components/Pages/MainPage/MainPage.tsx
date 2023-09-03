import Carousel from '../../Carousel/Carousel';
import React from 'react';
import cl from './MainPage.module.scss';
import TitleBlock from '../../TittleBlock/TitleBlock';

const MainPage = () => {
  return (
    <div className={cl.mainPage}>
      <TitleBlock />
      <Carousel />
    </div>
  );
};

export default MainPage;
