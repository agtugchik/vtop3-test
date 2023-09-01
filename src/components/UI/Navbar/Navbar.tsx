import React from 'react';
import Link from '../Link/Link';
import cl from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={cl.navbar}>
      <Link title="About Us" />
    </nav>
  );
};

export default Navbar;
