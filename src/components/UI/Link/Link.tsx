import React, { FC } from 'react';
import cl from './Link.module.scss';

interface ILink {
  title: string;
}

const Link: FC<ILink> = ({ title }) => {
  return (
    <a className={cl.link} href="">
      {title}
    </a>
  );
};

export default Link;
