import React from 'react';
import SimpleBar from 'simplebar-react';
import cl from './Blog.module.scss';
import 'simplebar-react/dist/simplebar.min.css';
import BlogItem from '../BlogItem/BlogItem';

const Blog = () => {
  return (
    <div className={cl.blog}>
      <h2>BLOG</h2>
      <div className={cl.blog_area}>
        <SimpleBar style={{ maxHeight: 571 }}>
          {[...Array(5)].fill(BlogItem).map((x, i) => (
            <p key={i}>{x()}</p>
          ))}
        </SimpleBar>
      </div>
    </div>
  );
};

export default Blog;
