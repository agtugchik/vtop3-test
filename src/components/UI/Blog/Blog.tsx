import React from 'react';
import SimpleBar from 'simplebar-react';
import cl from './Blog.module.scss';
import 'simplebar-react/dist/simplebar.min.css';
import BlogItem from '../BlogItem/BlogItem';
import { blogItems } from '../../../constants';

const propsWithoutLink = {
  title: blogItems[0].title,
  date: blogItems[0].date,
};

const propsWithLink = { ...propsWithoutLink, link: '/article/0' };

const Blog = () => {
  return (
    <div className={cl.blog}>
      <h2>BLOG</h2>
      <div className={cl.blog_area}>
        <SimpleBar style={{ maxHeight: 571 }}>
          {[...Array(5)]
            .fill(BlogItem)
            .map((x, i) =>
              i === 0
                ? (x as typeof BlogItem)({ ...propsWithLink, key: i })
                : (x as typeof BlogItem)({ ...propsWithoutLink, key: i })
            )}
        </SimpleBar>
      </div>
    </div>
  );
};

export default Blog;
