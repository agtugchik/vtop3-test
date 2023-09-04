import React from 'react';
import cl from './SocialMedia.module.scss';
import Icons from '../Icons/Icons';

const SocialMedia = () => {
  return (
    <div className={cl.socialMedia}>
      <h3>Our social media:</h3>
      <ul>
        {Icons.map((Icon, i) => (
          <li key={i}>
            <a href="">{Icon()}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
