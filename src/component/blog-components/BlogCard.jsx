import React from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";




const BlogCard = ({
  id,
  image,
  title,
  description,
  author,
  date,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="blog__container"
      onClick={() => navigate(`/blog/${id}`)}
    >
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="blog__image"
        loading="lazy" // Optimized for performance
      />

      {/* Content Section */}
      <div className="blog__content">
        <h2>
          {title}
        </h2>
        <p>{description}</p>

        {/* Author and Date */}
        <div className="blog__author">
          <span>By {author}</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>

        {/* Category */}
        <div className="blog__category">
          {category}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
