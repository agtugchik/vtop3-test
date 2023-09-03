import React from 'react';
import List from '../List/List';
import SocialMedia from '../SocialMedia/SocialMedia';
import cl from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <List
        className={cl.container}
        titles={['Terms & Conditions', 'Cookies', 'Contacts', 'Careers', 'Brand Guide']}
      />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
