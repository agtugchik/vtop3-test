import { blogItemDate, blogItemText } from '../../../constants';
import React from 'react';
import cl from './BlogItem.module.scss';

const BlogItem = () => {
  return (
    <div className={cl.blogItem}>
      <h4>{blogItemText}</h4>
      <p>{blogItemDate}</p>
    </div>
  );
};

export default BlogItem;
