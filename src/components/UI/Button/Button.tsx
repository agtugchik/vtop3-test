import React, { FC, ReactNode } from 'react';
import cl from './Button.module.scss';

interface IButton {
  className: string;
  children?: ReactNode;
}

const Button: FC<IButton> = ({ className, children }) => {
  return <button className={`${cl.button} ${className}`}>{children}</button>;
};

export default Button;
