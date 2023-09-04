import { blogItemDate, blogItemText } from '../../../constants';
import React from 'react';
import cl from './BlogItem.module.scss';

const BlogItem = () => {
  return (
    <a href="">
      <div className={cl.blogItem}>
        <h4>{blogItemText}</h4>
        <p>{blogItemDate}</p>
      </div>
    </a>
  );
};

export default BlogItem;
