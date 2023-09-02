import React, { FC, ReactNode } from 'react';
import cl from './Button.module.scss';

interface IButton {
  type: 'headerButton';
  children?: ReactNode;
}

const Button: FC<IButton> = ({ type, children }) => {
  return <button className={`${cl.button} ${cl[type]}`}>{children}</button>;
};

export default Button;
