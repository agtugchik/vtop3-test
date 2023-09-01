import React from 'react';
import Navbar from '../Navbar/Navbar';
import cl from './Header.module.scss';

const Header = () => {
  return (
    <header className={cl.header}>
      <Navbar />
    </header>
  );
};

export default Header;
