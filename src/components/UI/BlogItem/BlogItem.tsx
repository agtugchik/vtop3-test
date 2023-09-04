import React, { FC } from 'react';
import cl from './BlogItem.module.scss';
import { NavLink } from 'react-router-dom';

interface IBlogItem {
  title: string;
  date: string;
  link?: string;
  key: number;
}

const BlogItem: FC<IBlogItem> = ({ title, date, link, key }) => {
  return (
    <NavLink key={key} to={link || ''}>
      <div className={cl.blogItem}>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </NavLink>
  );
};

export default BlogItem;
