import React, { FC } from 'react';
import cl from './BlogItem.module.scss';

interface IBlogItem {
  title: string;
  date: string;
}

const BlogItem: FC<IBlogItem> = ({ title, date }) => {
  return (
    <a href="">
      <div className={cl.blogItem}>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </a>
  );
};

export default BlogItem;
