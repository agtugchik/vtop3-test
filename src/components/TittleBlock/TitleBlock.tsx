import Button from '../UI/Button/Button';
import React from 'react';
import cl from './TitleBlock.module.scss';
import Link from '../UI/Link/Link';

const TitleBlock = () => {
  return (
    <div className={cl.titleBlock}>
      <h1>
        HOUSE OF
        <br />
        <span>GAMBLING</span>
      </h1>
      <p>Raise your ROI with direct advertiser</p>
      <Button className={cl.titleBlock_button}>
        <Link title="BECOME A PARTNER" />
      </Button>
    </div>
  );
};

export default TitleBlock;
