import React from 'react';
import Button from '../Button/Button';
import ButtonType2 from '../ButtonType2/ButtonType2';
import Link from '../Link/Link';
import Navbar from '../Navbar/Navbar';
import cl from './Header.module.scss';

const Header = () => {
  return (
    <header className={cl.header}>
      <Navbar />
      <ButtonType2 type="headerButtonType2">
        <Link title="LOG IN"></Link>
      </ButtonType2>
      <Button type="headerButton">
        <Link title="SIGN UP"></Link>
      </Button>
    </header>
  );
};

export default Header;
