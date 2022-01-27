import React from "react";
import BlogItem from "./BlogItem";
const BlogsList = ({ blogsList }) => {
  return (
    <div className="content-wrapper">
      <div className="blogs-list">
        {blogsList.map((blog) => (
          <BlogItem blogData={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
