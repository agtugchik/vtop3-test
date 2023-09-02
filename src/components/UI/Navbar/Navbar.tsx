import React from 'react';
import List from '../List/List';
import cl from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={cl.navbar}>
      <List
        className={cl.container}
        titles={['About us', 'Brands', 'Commissions', 'News', 'Contact us', 'Careers']}
      />
    </nav>
  );
};

export default Navbar;
