import React from "react";

const BlogItem = ({
  blogData: { name, descreption, blog_url, image_src, blog_duration },
}) => {
  return (
    <div className="blog-item">
      <div className="blog-content">
        <div className="blog-image">
          <img alt="blog" src={image_src} />
        </div>
        <div className="blog-duration">
          <i class="fas fa-stopwatch"></i>{" "}
          <span>{": " + blog_duration + " Minutes"} </span>{" "}
        </div>
        <h2 className="blog-title">{name} </h2>
        <p className="blog-desc">{descreption} </p>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <button
            className="blog-btn"
            onClick={() => {
              window.open(blog_url, "_blank");
            }}
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
