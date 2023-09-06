import Carousel from '../../Carousel/Carousel';
import React from 'react';
import cl from './MainPage.module.scss';
import TitleBlock from '../../TittleBlock/TitleBlock';
// import Blog from '../../UI/Blog/Blog';

const MainPage = () => {
  return (
    <div className={cl.mainPage}>
      <TitleBlock />
      <Carousel />
      {/* <Blog /> */}
    </div>
  );
};

export default MainPage;
