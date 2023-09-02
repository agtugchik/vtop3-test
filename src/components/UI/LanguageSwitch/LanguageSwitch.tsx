import { Language } from '../../../constants';
import React, { useState } from 'react';
import ButtonType2 from '../ButtonType2/ButtonType2';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import cl from './LanguageSwitch.module.scss';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState<Language.EN | Language.RU>(Language.RU);
  return (
    <ButtonType2 type="headerButtonType2" state={[language, setLanguage]}>
      <LanguageIcon />
      <div className={cl.switcher}>{language}</div>
    </ButtonType2>
  );
};

export default LanguageSwitch;
