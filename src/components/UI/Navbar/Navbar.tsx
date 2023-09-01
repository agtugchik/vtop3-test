import React from 'react';
import cl from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={cl.navbar}>
      <a className={cl.navbar_link} href="#">
        About Us
      </a>
    </nav>
  );
};

export default Navbar;
