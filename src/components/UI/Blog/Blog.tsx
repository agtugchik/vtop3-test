import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import cl from './Blog.module.scss';

const Blog = () => {
  return (
    <div className={cl.blog}>
      <h2>BLOG</h2>
      <div className={cl.blog_area}>
        <BlogItem />
      </div>
    </div>
  );
};

export default Blog;
