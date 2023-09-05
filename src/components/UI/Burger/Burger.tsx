import React, { Fragment, ReactElement, useState, FC } from 'react';
import cl from './Burger.module.scss';

interface IBurger {
  children: ReactElement;
}

const Burger: FC<IBurger> = ({ children }) => {
  const [isActive, setActive] = useState(false);

  return (
    <Fragment>
      <div
        onClick={() => setActive(!isActive)}
        className={isActive ? `${cl.burger} ${cl.active}` : cl.burger}
      >
        <span />
      </div>
      <div className={isActive ? `${cl.menu} ${cl.active}` : cl.menu}>{children}</div>
    </Fragment>
  );
};

export default Burger;
