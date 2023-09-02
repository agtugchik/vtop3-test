import { Language } from '../../../constants';
import React, { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import cl from './ButtonType2.module.scss';

interface IButtonType2 {
  type: 'headerButtonType2';
  state?: [Language.EN | Language.RU, Dispatch<SetStateAction<Language.EN | Language.RU>>];
  children?: ReactNode;
}

const ButtonType2: FC<IButtonType2> = ({ type, state, children }) => {
  const [stateValue, setState] = state || [];
  return (
    <button
      className={`${cl.buttonType2} ${cl[type]}`}
      onClick={
        stateValue && setState
          ? () => (stateValue === Language.RU ? setState(Language.EN) : setState(Language.RU))
          : () => {
              return;
            }
      }
    >
      {children}
    </button>
  );
};

export default ButtonType2;
