import React from 'react';
import Link from '../Link/Link';
import cl from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={cl.navbar}>
      <ul className={cl.container}>
        <li>
          <Link title="About Us" />
        </li>
        <li>
          <Link title="Brands" />
        </li>
        <li>
          <Link title="Commissions" />
        </li>
        <li>
          <Link title="News" />
        </li>
        <li>
          <Link title="Contact Us" />
        </li>
        <li>
          <Link title="Careers" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
