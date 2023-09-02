import { Language } from '../../../constants';
import React, { useState } from 'react';
import ButtonType2 from '../ButtonType2/ButtonType2';
import Link from '../Link/Link';
// import cl from './LanguageSwitch.module.scss';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState<Language.EN | Language.RU>(Language.RU);
  return (
    <ButtonType2 type="headerButtonType2" state={[language, setLanguage]}>
      <Link title={language} />
    </ButtonType2>
  );
};

export default LanguageSwitch;
