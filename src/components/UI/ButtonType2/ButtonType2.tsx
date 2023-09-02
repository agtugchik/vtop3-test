import React, { FC, ReactNode } from 'react';
import cl from './ButtonType2.module.scss';

interface IButtonType2 {
  type: 'headerButtonType2';
  children?: ReactNode;
}

const ButtonType2: FC<IButtonType2> = ({ type, children }) => {
  return <button className={`${cl.buttonType2} ${cl[type]}`}>{children}</button>;
};

export default ButtonType2;
