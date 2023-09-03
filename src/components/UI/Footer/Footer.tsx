import React from 'react';
import List from '../List/List';
import cl from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <List
        className={cl.container}
        titles={['Terms & Conditions', 'Cookies', 'Contacts', 'Careers', 'Brand Guide']}
      />
    </footer>
  );
};

export default Footer;
