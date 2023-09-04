import React from 'react';
import cl from './ArticlePage.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import { blogItems } from '../../../constants';
import Button from '../../UI/Button/Button';

const ArticlePage = () => {
  const { id } = useParams();
  const blogItem = blogItems.find((item) => item.id === Number(id)) as (typeof blogItems)[0];
  return (
    <div className={cl.articlePage}>
      <h2>{blogItem.title}</h2>
      <p className={cl.articlePage_text}>{blogItem.text}</p>
      <p className={cl.articlePage_date}>{blogItem.date}</p>
      <NavLink to="/main">
        <Button className={cl.articlePage_button}>Back</Button>
      </NavLink>
    </div>
  );
};

export default ArticlePage;
