import React, { useState } from 'react';
import cl from './Burger.module.scss';

const Burger = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!isActive)}
      className={isActive ? `${cl.burger} ${cl.active}` : cl.burger}
    >
      <span />
    </div>
  );
};

export default Burger;
