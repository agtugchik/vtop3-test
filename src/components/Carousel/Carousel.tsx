import React from 'react';
import cl from './Carousel.module.scss';

const Carousel = () => {
  return (
    <div className={cl.carousel}>
      <div className={cl.container}>
        <div className={cl.firstLine}>
          <div></div>
        </div>
        <div className={cl.secondLine}>
          <div></div>
        </div>
        <div className={cl.thirdLine}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
