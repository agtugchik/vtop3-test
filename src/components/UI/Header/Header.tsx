import React, { Fragment } from 'react';
import Button from '../Button/Button';
import ButtonType2 from '../ButtonType2/ButtonType2';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import Link from '../Link/Link';
import Navbar from '../Navbar/Navbar';
import cl from './Header.module.scss';
import useWindowSize from '../../../hooks/useWindowSize';
import Burger from '../Burger/Burger';

const Header = () => {
  const [width] = useWindowSize();
  if (width > 1919) console.log(width);

  return (
    <header className={cl.header}>
      {width > 1919 ? (
        <Fragment>
          <Navbar />
          <LanguageSwitch />
          <ButtonType2 type="headerButtonType2">
            <Link title="LOG IN"></Link>
          </ButtonType2>
          <Button className={cl.header_button}>
            <Link title="SIGN UP"></Link>
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <LanguageSwitch />
          <Burger />
        </Fragment>
      )}
    </header>
  );
};

export default Header;
